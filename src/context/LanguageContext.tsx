import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.methodology': { en: 'Methodology', fr: 'Méthodologie' },
  'nav.backToGorgias': { en: '← Back to Gorgias', fr: '← Retour à Gorgias' },
  
  // Hero
  'hero.title': { en: 'CX Lab', fr: 'Labo CX' },
  'hero.subtitle1': { en: 'How AI is reshaping customer service across ecommerce.', fr: 'Comment l\'IA transforme le service client dans l\'e-commerce.' },
  'hero.subtitle2': { en: 'Industry benchmarks and trends from millions of support interactions.', fr: 'Benchmarks sectoriels et tendances issus de millions d\'interactions de support.' },
  'hero.lead': { en: 'Independent research on the state of customer experience in online retail—where the industry is heading, what\'s working, and what it means for your business.', fr: 'Recherche indépendante sur l\'état de l\'expérience client dans le e-commerce—où va le secteur, ce qui fonctionne, et ce que cela signifie pour votre entreprise.' },
  'hero.downloadReport': { en: 'Download Report', fr: 'Télécharger le Rapport' },
  'hero.exploreResearch': { en: 'Explore Research', fr: 'Explorer la Recherche' },
  'hero.scrollToExplore': { en: 'Scroll to explore', fr: 'Faites défiler pour explorer' },
  
  // Key Findings
  'keyFindings.title': { en: 'Industry Snapshot', fr: 'Aperçu du Secteur' },
  'keyFindings.subtitle': { en: 'Current state of AI adoption in ecommerce customer service', fr: 'État actuel de l\'adoption de l\'IA dans le service client e-commerce' },
  'keyFindings.industryAiRate': { en: 'Industry AI Rate', fr: 'Taux IA du Secteur' },
  'keyFindings.shareOfSupport': { en: 'Share of support using AI assistance', fr: 'Part du support utilisant l\'IA' },
  'keyFindings.growth24Months': { en: 'Growth (24 months)', fr: 'Croissance (24 mois)' },
  'keyFindings.industryAcceleration': { en: 'Industry adoption acceleration', fr: 'Accélération de l\'adoption sectorielle' },
  'keyFindings.sampleSize': { en: 'Sample Size', fr: 'Taille de l\'Échantillon' },
  'keyFindings.contextNote': { en: 'Based on aggregated, anonymized support interactions across the ecommerce sector.', fr: 'Basé sur des interactions de support agrégées et anonymisées dans le secteur e-commerce.' },
  'keyFindings.viewMethodology': { en: 'View methodology →', fr: 'Voir la méthodologie →' },
  
  // Chart Controls
  'chart.viewBy': { en: 'View by', fr: 'Afficher par' },
  'chart.ratesVolume': { en: 'Rates + Volume', fr: 'Taux + Volume' },
  'chart.ratesOnly': { en: 'Rates Only', fr: 'Taux Seuls' },
  'chart.volumeOnly': { en: 'Volume Only', fr: 'Volume Seul' },
  'chart.allSegments': { en: 'All Segments', fr: 'Tous les Segments' },
  'chart.commercial': { en: 'Commercial ($3-20M)', fr: 'Commercial (3-20M$)' },
  'chart.automationRate': { en: 'Automation Rate', fr: 'Taux d\'Automatisation' },
  'chart.handoverRate': { en: 'Handover Rate', fr: 'Taux de Transfert' },
  'chart.segment': { en: 'Segment', fr: 'Segment' },
  'chart.view': { en: 'View', fr: 'Vue' },
  
  // Chart Labels
  'chart.aiTouched': { en: 'AI Touched', fr: 'Touché par IA' },
  'chart.fullyAutomated': { en: 'Fully Automated', fr: 'Entièrement Automatisé' },
  'chart.ticketVolume': { en: 'Ticket Volume', fr: 'Volume de Tickets' },
  'chart.aiTouchedCurrent': { en: 'AI Touched (Current)', fr: 'Touché par IA (Actuel)' },
  'chart.growth': { en: 'Growth', fr: 'Croissance' },
  'chart.highAutomation': { en: 'High automation (70%+)', fr: 'Haute automation (70%+)' },
  'chart.mediumAutomation': { en: 'Medium (50-69%)', fr: 'Moyenne (50-69%)' },
  'chart.lowAutomation': { en: 'Low / Ceiling reached', fr: 'Basse / Plafond atteint' },
  'chart.highestAutomation': { en: 'Highest Automation', fr: 'Automation la Plus Haute' },
  'chart.lowestCeiling': { en: 'Lowest (Ceiling)', fr: 'Plus Basse (Plafond)' },
  'chart.average': { en: 'Average', fr: 'Moyenne' },
  'chart.avgAllSegments': { en: 'Avg. All Segments', fr: 'Moy. Tous Segments' },
  'chart.avgCommercial': { en: 'Avg. Commercial', fr: 'Moy. Commercial' },
  'chart.adoptionRate': { en: 'Adoption Rate', fr: 'Taux d\'Adoption' },
  
  // Insight Cards
  'insight.automationMix': { en: 'Automation Mix Index', fr: 'Indice du Mix d\'Automatisation' },
  'insight.aiGrowingShare': { en: "AI's Growing Share", fr: 'Part Croissante de l\'IA' },
  'insight.merchantAdoption': { en: 'Merchant Adoption Index', fr: 'Indice d\'Adoption des Marchands' },
  'insight.whoUsingAI': { en: "Who's Using AI", fr: 'Qui Utilise l\'IA' },
  'insight.automationCeiling': { en: 'The Automation Ceiling', fr: 'Le Plafond d\'Automatisation' },
  'insight.byInquiryType': { en: 'By Inquiry Type', fr: 'Par Type de Demande' },
  'insight.description.automationMix': { en: 'Share of ecommerce support tickets handled by AI (3-month rolling average)', fr: 'Part des tickets de support e-commerce gérés par l\'IA (moyenne mobile sur 3 mois)' },
  'insight.description.merchantAdoption': { en: 'Number of merchants with meaningful AI adoption by segment (min. 50 tickets, 10%+ AI share)', fr: 'Nombre de marchands avec une adoption significative de l\'IA par segment (min. 50 tickets, 10%+ part IA)' },
  'insight.description.automationCeiling': { en: 'Automation success rate by inquiry type across ecommerce brands', fr: 'Taux de succès de l\'automatisation par type de demande dans les marques e-commerce' },
  
  // AI Summary
  'ai.summary': { en: 'AI Summary', fr: 'Résumé IA' },
  'ai.quickTake': { en: 'Quick Take', fr: 'En Bref' },
  'ai.viewAnalysis': { en: 'View AI Analysis', fr: 'Voir l\'Analyse IA' },
  'ai.hideAnalysis': { en: 'Hide AI Analysis', fr: 'Masquer l\'Analyse IA' },
  'ai.readFullAnalysis': { en: 'Read full analysis →', fr: 'Lire l\'analyse complète →' },
  'ai.deeperDive': { en: 'Go deeper →', fr: 'Approfondir →' },
  'ai.showLess': { en: 'Show less', fr: 'Voir moins' },
  'ai.whatWereSeeing': { en: "What We're Seeing", fr: 'Ce Que Nous Observons' },
  'ai.theFullStory': { en: 'The Full Story', fr: 'L\'Histoire Complète' },
  'ai.analysis': { en: 'AI Analysis', fr: 'Analyse IA' },
  'ai.keyInflection': { en: 'Key Inflection Point', fr: 'Point d\'Inflexion Clé' },
  'ai.whatItMeans': { en: 'What It Means', fr: 'Ce Que Cela Signifie' },
  
  // Source
  'source.prefix': { en: 'Source:', fr: 'Source :' },
  'source.getData': { en: 'Get the data', fr: 'Obtenir les données' },
  'source.embed': { en: 'Embed', fr: 'Intégrer' },
  
  // Subscribe
  'subscribe.title': { en: 'Stay Informed', fr: 'Restez Informé' },
  'subscribe.subtitle': { en: 'Get exclusive access to our latest research, benchmark updates, and industry insights delivered to your inbox.', fr: 'Accédez en exclusivité à nos dernières recherches, mises à jour de benchmarks et analyses sectorielles directement dans votre boîte mail.' },
  'subscribe.placeholder': { en: 'Enter your email', fr: 'Entrez votre email' },
  'subscribe.button': { en: 'Subscribe', fr: 'S\'abonner' },
  'subscribe.privacy': { en: 'We respect your privacy. Unsubscribe at any time.', fr: 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.' },
  'subscribe.success': { en: 'Thanks for subscribing!', fr: 'Merci de vous être abonné !' },
  
  // Methodology
  'methodology.title': { en: 'Methodology', fr: 'Méthodologie' },
  'methodology.intro': { en: 'CX Lab measures trends in ecommerce customer experience using aggregated, anonymized data from online merchants. Our work builds on behavioral transaction data rather than surveys, providing a more timely and accurate measurement of industry trends.', fr: 'CX Lab mesure les tendances de l\'expérience client e-commerce en utilisant des données agrégées et anonymisées provenant de marchands en ligne. Notre travail s\'appuie sur des données comportementales transactionnelles plutôt que sur des enquêtes, offrant une mesure plus rapide et précise des tendances du secteur.' },
  'methodology.dataSource': { en: 'Data Source', fr: 'Source des Données' },
  'methodology.dataSourceText': { en: 'Our dataset is built from aggregated, anonymized customer support interactions across ecommerce brands. Data points represent actual customer-brand communications, not survey responses or self-reported metrics. This approach eliminates recall bias and provides real-time visibility into industry behavior.', fr: 'Notre ensemble de données est construit à partir d\'interactions de support client agrégées et anonymisées à travers les marques e-commerce. Les points de données représentent des communications client-marque réelles, pas des réponses à des enquêtes ou des métriques auto-déclarées. Cette approche élimine le biais de rappel et offre une visibilité en temps réel sur le comportement du secteur.' },
  'methodology.scaleCoverage': { en: 'Scale & Coverage', fr: 'Échelle et Couverture' },
  'methodology.scaleCoverageText': { en: 'The analysis encompasses', fr: 'L\'analyse englobe' },
  'methodology.fromMerchants': { en: 'from online merchants spanning a 24-month period (Jan 2024 - Nov 2025). This provides sufficient statistical power to identify meaningful trends across merchant sizes and verticals.', fr: 'provenant de marchands en ligne sur une période de 24 mois (Jan 2024 - Nov 2025). Cela fournit une puissance statistique suffisante pour identifier des tendances significatives selon les tailles de marchands et les secteurs.' },
  'methodology.keyMetrics': { en: 'Key Metrics', fr: 'Métriques Clés' },
  'methodology.aiTouchedRate': { en: 'AI Touched Rate', fr: 'Taux de Touche IA' },
  'methodology.aiTouchedRateDesc': { en: 'Percentage of tickets where AI played any role in the resolution process (3-month rolling average).', fr: 'Pourcentage de tickets où l\'IA a joué un rôle dans le processus de résolution (moyenne mobile sur 3 mois).' },
  'methodology.fullyAutomatedRate': { en: 'Fully Automated Rate', fr: 'Taux d\'Automatisation Complète' },
  'methodology.fullyAutomatedRateDesc': { en: 'Percentage of tickets resolved entirely without human agent involvement.', fr: 'Pourcentage de tickets résolus entièrement sans intervention d\'agent humain.' },
  'methodology.meaningfulAdoption': { en: 'Meaningful Adoption', fr: 'Adoption Significative' },
  'methodology.meaningfulAdoptionDesc': { en: 'Merchants processing 50+ tickets monthly with 10%+ AI coverage, filtering out trial usage.', fr: 'Marchands traitant 50+ tickets mensuels avec 10%+ de couverture IA, excluant les utilisations d\'essai.' },
  'methodology.dataProcessing': { en: 'Data Processing', fr: 'Traitement des Données' },
  'methodology.processing1': { en: 'Monthly aggregation with 3-month rolling averages for smoothing', fr: 'Agrégation mensuelle avec moyennes mobiles sur 3 mois pour le lissage' },
  'methodology.processing2': { en: 'Minimum ticket thresholds to ensure statistical significance', fr: 'Seuils minimaux de tickets pour assurer la significativité statistique' },
  'methodology.processing3': { en: 'Merchant-level deduplication before industry aggregation', fr: 'Déduplication au niveau marchand avant agrégation sectorielle' },
  'methodology.processing4': { en: 'Exclusion of partial months from trend calculations', fr: 'Exclusion des mois partiels des calculs de tendances' },
  'methodology.limitations': { en: 'Limitations & Considerations', fr: 'Limites et Considérations' },
  'methodology.selectionBias': { en: 'Selection bias:', fr: 'Biais de sélection :' },
  'methodology.selectionBiasText': { en: 'Merchants using digital support tools may skew toward more tech-forward operations, potentially overstating industry-wide AI adoption.', fr: 'Les marchands utilisant des outils de support digital peuvent être plus orientés technologie, surestimant potentiellement l\'adoption de l\'IA à l\'échelle du secteur.' },
  'methodology.channelCoverage': { en: 'Channel coverage:', fr: 'Couverture des canaux :' },
  'methodology.channelCoverageText': { en: 'This analysis focuses on digital support channels (chat, email, social). Phone and in-person support interactions are not represented.', fr: 'Cette analyse se concentre sur les canaux de support digital (chat, email, réseaux sociaux). Les interactions de support téléphonique et en personne ne sont pas représentées.' },
  'methodology.definitionSensitivity': { en: 'Definition sensitivity:', fr: 'Sensibilité des définitions :' },
  'methodology.definitionSensitivityText': { en: '"AI touched" includes any AI involvement, from simple auto-responses to sophisticated intent classification. Capability depth varies across merchants.', fr: '"Touché par IA" inclut toute implication de l\'IA, des réponses automatiques simples à la classification d\'intention sophistiquée. La profondeur des capacités varie selon les marchands.' },
  'methodology.lastUpdate': { en: 'This research is updated quarterly. Last update:', fr: 'Cette recherche est mise à jour trimestriellement. Dernière mise à jour :' },
  
  // Footer
  'footer.tagline': { en: 'The conversational AI platform for ecommerce.', fr: 'La plateforme d\'IA conversationnelle pour l\'e-commerce.' },
  'footer.cxLab': { en: 'CX Lab', fr: 'Labo CX' },
  'footer.currentReport': { en: 'Current Report', fr: 'Rapport Actuel' },
  'footer.company': { en: 'Company', fr: 'Entreprise' },
  'footer.about': { en: 'About', fr: 'À Propos' },
  'footer.blog': { en: 'Blog', fr: 'Blog' },
  'footer.careers': { en: 'Careers', fr: 'Carrières' },
  'footer.copyright': { en: '© 2025 Gorgias. All rights reserved.', fr: '© 2025 Gorgias. Tous droits réservés.' },
  'footer.dataPrivacy': { en: 'All data is aggregated and anonymized. Individual merchant data is never disclosed.', fr: 'Toutes les données sont agrégées et anonymisées. Les données individuelles des marchands ne sont jamais divulguées.' },
  
  // Inquiry Types
  'inquiry.orderStatus': { en: 'Order Status', fr: 'Statut de Commande' },
  'inquiry.shippingUpdates': { en: 'Shipping Updates', fr: 'Mises à Jour Livraison' },
  'inquiry.productInformation': { en: 'Product Information', fr: 'Informations Produit' },
  'inquiry.returnRequests': { en: 'Return Requests', fr: 'Demandes de Retour' },
  'inquiry.accountChanges': { en: 'Account Changes', fr: 'Modifications de Compte' },
  'inquiry.complaints': { en: 'Complaints', fr: 'Réclamations' },
  'inquiry.complexReturns': { en: 'Complex Returns', fr: 'Retours Complexes' },
  'inquiry.refundDisputes': { en: 'Refund Disputes', fr: 'Litiges de Remboursement' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('cx-lab-lang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cx-lab-lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

