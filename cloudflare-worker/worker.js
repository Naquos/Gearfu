const GITHUB_ORIGIN = 'https://naquos.github.io';
const GITHUB_BASE_PATH = '/Gearfu';
const SUPABASE_URL = 'https://nsxhzgbzihkpltpsqpip.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_4twYhHBfyncLO2Fq8YLSLA_GaUjMka1';

const CLASS_NAMES = {
    1: 'Feca',
    2: 'Osamodas',
    3: 'Enutrof',
    4: 'Sram',
    5: 'Xelor',
    6: 'Ecaflip',
    7: 'Eniripsa',
    8: 'Iop',
    9: 'Cra',
    10: 'Sadida',
    11: 'Sacrieur',
    12: 'Pandawa',
    13: 'Roublard',
    14: 'Zobal',
    15: 'Ouginak',
    16: 'Steamer',
    18: 'Eliotrope',
    19: 'Huppermage'
};

export default {
    async fetch(request) {
        try {
            const url = new URL(request.url);
            const pathname = url.pathname;

            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return new Response('Method Not Allowed', { status: 405 });
            }

            const idCandidate = pathname.startsWith('/') ? pathname.slice(1) : pathname;
            const userAgent = request.headers.get('user-agent') || '';

            if (isBuildId(idCandidate)) {
                if (isBot(userAgent)) {
                    return await renderBotPreview(idCandidate);
                }

                return Response.redirect(`${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/${idCandidate}${url.search}`, 302);
            }

            if (pathname.startsWith(`${GITHUB_BASE_PATH}/`) && isSpaPath(pathname.slice(GITHUB_BASE_PATH.length))) {
                return proxyFromGithub(`${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/404.html${url.search}`);
            }

            const targetUrl = mapToGithub(url);
            const response = await proxyFromGithub(targetUrl);

            if (response.status !== 404) {
                return response;
            }

            if (isSpaPath(pathname)) {
                return proxyFromGithub(`${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/404.html${url.search}`);
            }

            return response;
        } catch (error) {
            return new Response('Worker error', { status: 500 });
        }
    }
};

function isBuildId(value) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function isBot(userAgent) {
    return /(discordbot|twitterbot|facebookexternalhit|linkedinbot|slackbot|telegrambot|whatsapp|googlebot|bingbot|duckduckbot|embedly)/i.test(userAgent);
}

function isSpaPath(pathname) {
    if (pathname === '/' || pathname === '') {
        return false;
    }

    const cleaned = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    if (!cleaned) {
        return false;
    }

    if (cleaned.includes('.')) {
        return false;
    }

    return true;
}

function mapToGithub(url) {
    const pathname = url.pathname;

    if (pathname === '/' || pathname === '') {
        return `${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/`;
    }

    if (pathname === GITHUB_BASE_PATH || pathname.startsWith(`${GITHUB_BASE_PATH}/`)) {
        return `${GITHUB_ORIGIN}${pathname}${url.search}`;
    }

    return `${GITHUB_ORIGIN}${GITHUB_BASE_PATH}${pathname}${url.search}`;
}

async function proxyFromGithub(targetUrl) {
    return fetch(targetUrl, {
        headers: {
            'user-agent': 'gearfu-worker-proxy'
        },
        redirect: 'follow'
    });
}

async function renderBotPreview(buildId) {
    const [build, statistics] = await Promise.all([
        fetchBuild(buildId),
        fetchStatistics(buildId)
    ]);

    const buildName = build?.nameBuild || 'Build Wakfu';
    const classe = build?.classe && CLASS_NAMES[build.classe] ? CLASS_NAMES[build.classe] : 'Classe inconnue';
    const level = build?.level || '-';
    const mastery = statistics?.maitrises ?? '-';
    const resistances = statistics?.resistances ?? '-';
    const pa = statistics?.PA ?? '-';
    const pm = statistics?.PM ?? '-';
    const pw = statistics?.PW ?? '-';

    const title = `Gearfu - ${escapeHtml(buildName)}`;
    const description = `${classe} niv. ${level} | ${mastery} maitrises | ${resistances} resistances | ${pa} PA / ${pm} PM / ${pw} PW`;
    const canonical = `${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/${buildId}`;
    const ogImage = `${GITHUB_ORIGIN}${GITHUB_BASE_PATH}/icons/icon-512x512.png`;

    const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${canonical}">
</head>
<body>
  <p>Redirection vers le build...</p>
</body>
</html>`;

    return new Response(html, {
        status: 200,
        headers: {
            'content-type': 'text/html; charset=utf-8',
            'cache-control': 'public, max-age=300'
        }
    });
}

async function fetchBuild(buildId) {
    const query = `${SUPABASE_URL}/rest/v1/build?id=eq.${encodeURIComponent(buildId)}&select=id,nameBuild,classe,level&limit=1`;
    const response = await fetch(query, {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        }
    });

    if (!response.ok) {
        return null;
    }

    const rows = await response.json();
    return Array.isArray(rows) && rows.length ? rows[0] : null;
}

async function fetchStatistics(buildId) {
    const query = `${SUPABASE_URL}/rest/v1/statistics?buildId=eq.${encodeURIComponent(buildId)}&select=PA,PM,PW,maitrises,resistances&limit=1`;
    const response = await fetch(query, {
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        }
    });

    if (!response.ok) {
        return null;
    }

    const rows = await response.json();
    return Array.isArray(rows) && rows.length ? rows[0] : null;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
