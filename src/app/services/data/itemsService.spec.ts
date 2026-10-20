import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { Item } from "../../models/data/item";
import { ItemsService } from "./itemsService";

describe("ItemsService", () => {
  const service = Object.create(ItemsService.prototype) as ItemsService;
  const item = {
    equipEffects: [
      { id: 1, actionId: IdActionsEnum.MAITRISES_FEU, params: [370] },
      { id: 2, actionId: IdActionsEnum.MAITRISES_EAU, params: [370] },
    ],
  } as Item;

  const calcul = (ids: IdActionsEnum[]) =>
    service.calculMaitrisesForAnItem(item, ids.length, ids, 1, false, false, false, false);

  it("does not add elemental masteries", () => {
    expect(calcul([IdActionsEnum.MAITRISES_FEU, IdActionsEnum.MAITRISES_EAU])).toBe(370);
    expect(calcul([IdActionsEnum.MAITRISES_FEU])).toBe(370);
  });

  it("ignores elemental masteries if a selected element is missing", () => {
    expect(calcul([IdActionsEnum.MAITRISES_FEU, IdActionsEnum.MAITRISES_TERRE])).toBe(0);
  });
});
