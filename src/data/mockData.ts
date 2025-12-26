// ============================================
// REAL DATA FROM BIGQUERY QUERIES
// ============================================

// Automation Mix Index - Shows AI's growing share of ticket handling
// Source: Query 3 - Monthly ticket handling evolution since 2024
export const automationMixData = [
  { month: '2024-01-01', label: 'Jan \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 30340849 },
  { month: '2024-02-01', label: 'Feb \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 28187512 },
  { month: '2024-03-01', label: 'Mar \'24', noHumanPct: 0.0, aiTouchedPct: 0.01, totalTickets: 31315812 },
  { month: '2024-04-01', label: 'Apr \'24', noHumanPct: 0.0, aiTouchedPct: 0.02, totalTickets: 30645891 },
  { month: '2024-05-01', label: 'May \'24', noHumanPct: 0.01, aiTouchedPct: 0.04, totalTickets: 29571155 },
  { month: '2024-06-01', label: 'Jun \'24', noHumanPct: 0.01, aiTouchedPct: 0.13, totalTickets: 25888521 },
  { month: '2024-07-01', label: 'Jul \'24', noHumanPct: 0.13, aiTouchedPct: 0.32, totalTickets: 25827522 },
  { month: '2024-08-01', label: 'Aug \'24', noHumanPct: 0.41, aiTouchedPct: 0.68, totalTickets: 25439339 },
  { month: '2024-09-01', label: 'Sep \'24', noHumanPct: 0.93, aiTouchedPct: 1.23, totalTickets: 24589022 },
  { month: '2024-10-01', label: 'Oct \'24', noHumanPct: 1.44, aiTouchedPct: 1.79, totalTickets: 26206463 },
  { month: '2024-11-01', label: 'Nov \'24', noHumanPct: 2.18, aiTouchedPct: 2.44, totalTickets: 29664159 },
  { month: '2024-12-01', label: 'Dec \'24', noHumanPct: 3.23, aiTouchedPct: 3.28, totalTickets: 34216744 },
  { month: '2025-01-01', label: 'Jan \'25', noHumanPct: 4.13, aiTouchedPct: 4.11, totalTickets: 27330412 },
  { month: '2025-02-01', label: 'Feb \'25', noHumanPct: 4.68, aiTouchedPct: 4.68, totalTickets: 23175921 },
  { month: '2025-03-01', label: 'Mar \'25', noHumanPct: 4.88, aiTouchedPct: 5.04, totalTickets: 25808854 },
  { month: '2025-04-01', label: 'Apr \'25', noHumanPct: 5.42, aiTouchedPct: 5.62, totalTickets: 22350919 },
  { month: '2025-05-01', label: 'May \'25', noHumanPct: 5.96, aiTouchedPct: 6.17, totalTickets: 26201993 },
  { month: '2025-06-01', label: 'Jun \'25', noHumanPct: 6.85, aiTouchedPct: 7.05, totalTickets: 23767130 },
  { month: '2025-07-01', label: 'Jul \'25', noHumanPct: 7.63, aiTouchedPct: 8.03, totalTickets: 24392137 },
  { month: '2025-08-01', label: 'Aug \'25', noHumanPct: 8.32, aiTouchedPct: 9.05, totalTickets: 23247191 },
  { month: '2025-09-01', label: 'Sep \'25', noHumanPct: 8.72, aiTouchedPct: 9.63, totalTickets: 21115642 },
  { month: '2025-10-01', label: 'Oct \'25', noHumanPct: 9.37, aiTouchedPct: 10.14, totalTickets: 22217845 },
  { month: '2025-11-01', label: 'Nov \'25', noHumanPct: 10.5, aiTouchedPct: 11.05, totalTickets: 25301578 },
];

// AI Adoption by Merchant Segment
// Source: Query 1 & 2 - Overall vs Commercial segment
export const merchantAdoptionData = [
  { month: '2025-01-01', label: 'Jan \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-02-01', label: 'Feb \'25', overallMerchants: 168, commercialMerchants: 56, adoptionPct: 100 },
  { month: '2025-03-01', label: 'Mar \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-04-01', label: 'Apr \'25', overallMerchants: 180, commercialMerchants: 60, adoptionPct: 100 },
  { month: '2025-05-01', label: 'May \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-06-01', label: 'Jun \'25', overallMerchants: 180, commercialMerchants: 60, adoptionPct: 100 },
  { month: '2025-07-01', label: 'Jul \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-08-01', label: 'Aug \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-09-01', label: 'Sep \'25', overallMerchants: 180, commercialMerchants: 60, adoptionPct: 100 },
  { month: '2025-10-01', label: 'Oct \'25', overallMerchants: 186, commercialMerchants: 62, adoptionPct: 100 },
  { month: '2025-11-01', label: 'Nov \'25', overallMerchants: 180, commercialMerchants: 60, adoptionPct: 100 },
];

// ============================================
// PLACEHOLDER DATA (awaiting real queries)
// ============================================

// Automation Ceiling by Inquiry Type (placeholder - needs real data)
export const automationCeilingData = [
  { intent: 'Order Status', automationRate: 92, handoverRate: 8, category: 'transactional' },
  { intent: 'Shipping Updates', automationRate: 88, handoverRate: 12, category: 'transactional' },
  { intent: 'Product Information', automationRate: 76, handoverRate: 24, category: 'informational' },
  { intent: 'Return Requests', automationRate: 71, handoverRate: 29, category: 'transactional' },
  { intent: 'Account Changes', automationRate: 64, handoverRate: 36, category: 'account' },
  { intent: 'Complaints', automationRate: 41, handoverRate: 59, category: 'emotional' },
  { intent: 'Complex Returns', automationRate: 32, handoverRate: 68, category: 'emotional' },
  { intent: 'Refund Disputes', automationRate: 23, handoverRate: 77, category: 'emotional' },
];

// Cost vs Satisfaction (placeholder - needs real data)
export const costSatisfactionData = [
  { type: 'Fully Automated', shortType: 'Automated', csat: 3.8, costPerTicket: 0.52, volume: 42 },
  { type: 'AI + Human Handover', shortType: 'AI + Handover', csat: 4.4, costPerTicket: 4.20, volume: 35 },
  { type: 'Human Only', shortType: 'Human Only', csat: 4.5, costPerTicket: 11.80, volume: 23 },
];

// ============================================
// COMPUTED SUMMARY STATS
// ============================================

// Calculate from real data
const latestData = automationMixData[automationMixData.length - 1];
const totalTicketsAnalyzed = automationMixData.reduce((sum, d) => sum + d.totalTickets, 0);

export const summaryStats = {
  totalInteractions: `${Math.round(totalTicketsAnalyzed / 1000000)}M+`,
  currentAiTouchedPct: `${latestData.aiTouchedPct}%`,
  currentNoHumanPct: `${latestData.noHumanPct}%`,
  growthMultiple: `${Math.round(latestData.aiTouchedPct / 0.01)}x`,
  timeframe: 'Jan 2024 - Nov 2025',
  lastUpdated: 'November 2025',
};

// AI Adoption Data - Industry adoption rate over time
export const aiAdoptionData = [
  { month: '2024-01-01', label: 'Jan \'24', adoption: 12 },
  { month: '2024-02-01', label: 'Feb \'24', adoption: 14 },
  { month: '2024-03-01', label: 'Mar \'24', adoption: 17 },
  { month: '2024-04-01', label: 'Apr \'24', adoption: 21 },
  { month: '2024-05-01', label: 'May \'24', adoption: 25 },
  { month: '2024-06-01', label: 'Jun \'24', adoption: 29 },
  { month: '2024-07-01', label: 'Jul \'24', adoption: 34 },
  { month: '2024-08-01', label: 'Aug \'24', adoption: 38 },
  { month: '2024-09-01', label: 'Sep \'24', adoption: 42 },
  { month: '2024-10-01', label: 'Oct \'24', adoption: 47 },
  { month: '2024-11-01', label: 'Nov \'24', adoption: 51 },
  { month: '2024-12-01', label: 'Dec \'24', adoption: 54 },
  { month: '2025-01-01', label: 'Jan \'25', adoption: 57 },
  { month: '2025-02-01', label: 'Feb \'25', adoption: 59 },
  { month: '2025-03-01', label: 'Mar \'25', adoption: 61 },
  { month: '2025-04-01', label: 'Apr \'25', adoption: 62 },
  { month: '2025-05-01', label: 'May \'25', adoption: 64 },
  { month: '2025-06-01', label: 'Jun \'25', adoption: 65 },
  { month: '2025-07-01', label: 'Jul \'25', adoption: 66 },
  { month: '2025-08-01', label: 'Aug \'25', adoption: 67 },
  { month: '2025-09-01', label: 'Sep \'25', adoption: 67 },
  { month: '2025-10-01', label: 'Oct \'25', adoption: 67 },
  { month: '2025-11-01', label: 'Nov \'25', adoption: 67 },
];

// Type exports
export type AutomationMixDataPoint = typeof automationMixData[number];
export type MerchantAdoptionDataPoint = typeof merchantAdoptionData[number];
export type AutomationCeilingDataPoint = typeof automationCeilingData[number];
export type CostSatisfactionDataPoint = typeof costSatisfactionData[number];
export type AIAdoptionDataPoint = typeof aiAdoptionData[number];
