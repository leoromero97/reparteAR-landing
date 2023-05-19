import { IconList } from "../components/Icon/types";
import { texts } from "./texts";

export interface IServices {
  id: string;
  icon: IconList;
  title: string;
}

export const services: IServices[] = [
  {
    id: 'flexShippingMarket',
    icon: 'MercadoEnviosFlex',
    title: texts.services.services.flexShippingMarket,
  },
  {
    id: 'deliveriesInTwentyFourHours',
    icon: 'Thunderbolt',
    title: texts.services.services.deliveriesInTwentyFourHours,
  },
  {
    id: 'onlineSalesDeliveries',
    icon: 'Cart',
    title: texts.services.services.onlineSalesDeliveries,
  },
  {
    id: 'scheduledShipments',
    icon: 'Clock',
    title: texts.services.services.scheduledShipments,
  },
  {
    id: 'doorToDoorDeliveries',
    icon: 'Home',
    title: texts.services.services.doorToDoorDeliveries,
  },
  {
    id: 'withdrawalsFromOnlinePurchases',
    icon: 'Commerce',
    title: texts.services.services.withdrawalsFromOnlinePurchases,
  },
  {
    id: 'documentTransfers',
    icon: 'ClipboardNote',
    title: texts.services.services.documentTransfers,
  },
  {
    id: 'collectionProcedures',
    icon: 'MoneyBillStack',
    title: texts.services.services.collectionProcedures,
  },
  {
    id: 'proceduresManagement',
    icon: 'ClipboardNote',
    title: texts.services.services.proceduresManagement,
  },
  {
    id: 'parcelOffices',
    icon: 'Box',
    title: texts.services.services.parcelOffices,
  },
]