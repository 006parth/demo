export interface ConstituentType {
    financialInstrumentId: Number,
    ticker: String,
    name: String,
    score: number,
    holdingPercentage: number
}
export interface exchangeObject {
    description: String,
    name: String
}
export interface FundType {
    description: String,
    name: String,
    fund: boolean
}
export interface FundDetails {
    domestic: Boolean,
    exchange: exchangeObject,
    exchangeLocation: exchangeObject,
    name: String,
    id: number,
    impactScore: number,
    marketCapitalization: number,
    previousSharePrice: number,
    sector: exchangeObject,
    ticker: String,
    type: FundType,
    uniqueKey: String,
    industry?: String
}
export interface ConstituentProps {
    data: ConstituentType
}
export interface FundProps {
    data: FundData | undefined
}
export type FundData = FundDetails;