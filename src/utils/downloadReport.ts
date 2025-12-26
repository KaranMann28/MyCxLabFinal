import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function downloadReport(language: 'en' | 'fr' = 'en') {
  const reportTitle = language === 'en' 
    ? 'Gorgias CX Lab - Industry Research Report' 
    : 'Gorgias Labo CX - Rapport de Recherche Sectorielle';
  
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `cx-lab-report-${timestamp}.pdf`;

  // Create loading indicator
  const loadingEl = document.createElement('div');
  loadingEl.id = 'pdf-loading';
  loadingEl.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      color: white;
      font-family: Inter, sans-serif;
    ">
      <div style="
        width: 48px;
        height: 48px;
        border: 3px solid #333;
        border-top-color: #E8826E;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "></div>
      <p style="margin-top: 16px; font-size: 14px;">
        ${language === 'en' ? 'Generating PDF report...' : 'Génération du rapport PDF...'}
      </p>
    </div>
    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loadingEl);

  try {
    // Get the main content element
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    
    if (!mainContent) {
      throw new Error('Main content not found');
    }

    // Store original styles
    const originalOverflow = document.body.style.overflow;
    const originalHeight = mainContent.style.height;
    
    // Temporarily modify for capture
    document.body.style.overflow = 'visible';
    mainContent.style.height = 'auto';

    // Capture the content
    const canvas = await html2canvas(mainContent, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 1200,
    });

    // Restore original styles
    document.body.style.overflow = originalOverflow;
    mainContent.style.height = originalHeight;

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add header
    pdf.setFillColor(232, 130, 110); // Gorgias coral
    pdf.rect(0, 0, 210, 25, 'F');
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.setTextColor(255, 255, 255);
    pdf.text(reportTitle, 14, 16);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(timestamp, 196, 16, { align: 'right' });

    // Add content image
    let heightLeft = imgHeight;
    let position = 30;
    
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    
    // First page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= (pageHeight - position);

    // Additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Add footer on last page
    const pageCount = pdf.internal.pages.length - 1;
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.text(
        `${language === 'en' ? 'Page' : 'Page'} ${i} ${language === 'en' ? 'of' : 'sur'} ${pageCount}`,
        105, 
        290, 
        { align: 'center' }
      );
      pdf.text('gorgias.com/cx-lab', 14, 290);
    }

    // Save the PDF
    pdf.save(filename);

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert(language === 'en' 
      ? 'Error generating PDF. Please try again.' 
      : 'Erreur lors de la génération du PDF. Veuillez réessayer.'
    );
  } finally {
    // Remove loading indicator
    const loading = document.getElementById('pdf-loading');
    if (loading) {
      loading.remove();
    }
  }
}

// Simple version - just captures visible viewport
export async function downloadReportSimple(language: 'en' | 'fr' = 'en') {
  const timestamp = new Date().toISOString().split('T')[0];
  
  // Create a simple text-based summary report
  const reportContent = language === 'en' ? `
GORGIAS CX LAB
Industry Research Report
Generated: ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY FINDINGS

• 11.05% - AI-Touched Tickets
  Share of ecommerce support now handled by AI

• 1105x - Growth Since Jan 2024  
  AI ticket handling increase in under 2 years

• 607M+ - Tickets Analyzed
  Jan 2024 - Nov 2025

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTOMATION MIX INDEX

AI-assisted support has grown 1105x since January 2024. 
Currently, 11.05% of all ecommerce support tickets are 
touched by AI, with 10.5% resolved entirely without 
human involvement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MERCHANT ADOPTION INDEX

Among merchants meeting our 'meaningful adoption' 
threshold (50+ tickets, 10%+ AI coverage), AI usage 
is universal. The cohort of ~180 merchants represents 
brands that have crossed the commitment barrier—and 
none have pulled back.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE AUTOMATION CEILING

Every ecommerce brand hits the same automation wall.
Transactional inquiries like order status can reach 
90%+ automation, while emotionally complex issues 
plateau around 23%.

By Inquiry Type:
• Order Status: 92%
• Shipping Updates: 88%
• Product Information: 76%
• Return Requests: 71%
• Account Changes: 64%
• Complaints: 41%
• Complex Returns: 32%
• Refund Disputes: 23%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

METHODOLOGY

CX Lab measures trends in ecommerce customer experience 
using aggregated, anonymized data from online merchants. 
Our work builds on behavioral transaction data rather 
than surveys, providing a more timely and accurate 
measurement of industry trends.

Data Source: Aggregated, anonymized customer support 
interactions across ecommerce brands.

Scale: 607M+ support interactions from Jan 2024 - Nov 2025.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© 2025 Gorgias. All rights reserved.
All data is aggregated and anonymized.
Individual merchant data is never disclosed.

Visit: gorgias.com/cx-lab
` : `
GORGIAS LABO CX
Rapport de Recherche Sectorielle
Généré le: ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RÉSULTATS CLÉS

• 11.05% - Tickets Traités par IA
  Part du support e-commerce géré par l'IA

• 1105x - Croissance Depuis Jan 2024
  Augmentation du traitement IA en moins de 2 ans

• 607M+ - Tickets Analysés
  Jan 2024 - Nov 2025

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INDICE DU MIX D'AUTOMATISATION

Le support assisté par IA a augmenté de 1105x depuis 
janvier 2024. Actuellement, 11.05% de tous les tickets 
de support e-commerce sont touchés par l'IA, avec 10.5% 
résolus entièrement sans intervention humaine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INDICE D'ADOPTION DES MARCHANDS

Parmi les marchands atteignant notre seuil d'adoption 
significative (50+ tickets, 10%+ couverture IA), 
l'utilisation de l'IA est universelle. La cohorte 
d'environ 180 marchands représente des marques qui 
ont franchi le cap de l'engagement—et aucune n'a 
fait marche arrière.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LE PLAFOND D'AUTOMATISATION

Chaque marque e-commerce atteint le même mur 
d'automatisation. Les demandes transactionnelles 
comme le statut de commande peuvent atteindre 90%+ 
d'automatisation, tandis que les problèmes 
émotionnellement complexes plafonnent autour de 23%.

Par Type de Demande:
• Statut de Commande: 92%
• Mises à Jour Livraison: 88%
• Informations Produit: 76%
• Demandes de Retour: 71%
• Modifications de Compte: 64%
• Réclamations: 41%
• Retours Complexes: 32%
• Litiges de Remboursement: 23%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MÉTHODOLOGIE

CX Lab mesure les tendances de l'expérience client 
e-commerce en utilisant des données agrégées et 
anonymisées provenant de marchands en ligne. Notre 
travail s'appuie sur des données comportementales 
plutôt que sur des enquêtes.

Source: Interactions de support client agrégées et 
anonymisées à travers les marques e-commerce.

Échelle: 607M+ interactions de Jan 2024 - Nov 2025.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© 2025 Gorgias. Tous droits réservés.
Toutes les données sont agrégées et anonymisées.
Les données individuelles des marchands ne sont 
jamais divulguées.

Visitez: gorgias.com/cx-lab
`;

  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cx-lab-report-${timestamp}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


