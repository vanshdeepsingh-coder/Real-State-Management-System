import { IAgency } from "./agency";

export enum PropertyStatus {
  Published,
  Draft,
}

export enum PropertyAvailability {
  Available,
  Rented,
}

export enum PropertyType {
  Flat,
  House,
}

export enum PropertyPriceType {
  PerAnnum,
  PerMonth,
}

interface IPropertyImage extends BaseType {
  id: string;
  imageURL: string;
  verified: boolean;
  propertyId: string;
}

export interface IProperty extends BaseType {
  id: string;
  title: string;
  description?: string;
  locality: string;
  street: string;
  status: PropertyStatus;
  availability: PropertyAvailability;
  type: PropertyType;
  price: number;
  priceType: PropertyPriceType;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  numberOfToilets: number;
  parkingSpace?: number;
  totalLandArea?: number;
  furnished?: boolean;
  serviced?: boolean;
  shared?: boolean;
  images: IPropertyImage[];
  agencyId?: string;
  agency?: IAgency;
}

export type PropertyOverview = Pick<
  IProperty,
  | "id"
  | "title"
  | "description"
  | "numberOfBathrooms"
  | "numberOfBedrooms"
  | "totalLandArea"
  | "images"
  | "price"
  | "priceType"
  | "street"
  | "locality"
>;

export type LatestProperties = {
  properties: PropertyOverview[];
};
