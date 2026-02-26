import { Injectable } from "@angular/core";
import * as pako from "pako";
import { from, map, Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CompressionService {
    
    public decompressGzip(compressedData: ArrayBuffer): string {
        try {
            const uint8Array = new Uint8Array(compressedData);
            
            // Vérifier si c'est vraiment du gzip (magic number: 0x1f 0x8b)
            if (uint8Array[0] === 0x1f && uint8Array[1] === 0x8b) {
                const decompressed = pako.inflate(uint8Array, { to: 'string' });
                return decompressed;
            } else {
                // Les données sont déjà décompressées
                const decoded = new TextDecoder().decode(uint8Array);
                return decoded;
            }
        } catch (error) {
            console.error('Erreur lors de la décompression gzip:', error);
            throw error;
        }
    }

    public decompressGzipJson<T>(url: string): Observable<T> {
        const promise = fetch(url)
            .then(response => response.arrayBuffer())
            .then(compressed => this.decompressGzip(compressed));
        return from(promise).pipe(
            map(decompressedString => JSON.parse(decompressedString) as T));
    }
}