import React from "react";
import { Documentation } from "./components/Documentation";
import { Documentation as DocumentationType } from "./types/documentation";

const sampleData: DocumentationType = [
  {
    sectionTitle: "1 Introduction",
    subsections: [
      {
        title: "",
        description:
          "L’objectif de cette introduction est de poser les bases nécessaires pour comprendre la technologie OFDM (Orthogonal Frequency Division Multiplexing). Nous allons expliquer ce qu'est OFDM, pourquoi cette technique est importante dans le domaine des communications modernes, et ce que nous allons accomplir avec cette simulation MATLAB.",
      },
      {
        title: "1.1 Qu’est-ce que l’OFDM ?",
        description:
          "L’OFDM, ou Multiplexage par Répartition Orthogonale de Fréquences, est une technique de modulation numérique qui divise les données en plusieurs sous-porteuses étroites et orthogonales. Chaque sous-porteuse transporte une partie des données de manière parallèle. Cette méthode permet de transmettre les données plus efficacement tout en minimisant les interférences entre les signaux.",
      },
      {
        title: "1.2 Pourquoi l’OFDM est-il important ?",
        description:
          "L'OFDM est une technologie clé dans de nombreuses applications modernes, telles que :",
        optionsList: {
          type: "unordered",
          options: [
            "Le Wi-Fi (normes IEEE 802.11a/g/n/ac).",
            "Les réseaux mobiles (4G LTE, 5G).",
            "La télévision numérique (DVB-T).",
            "Elle est prisée pour sa robustesse face aux distorsions du canal (échos, interférences) et sa capacité à utiliser efficacement les bandes de fréquence disponibles.",
          ],
        },
      },
      {
        title: "1.3 Objectif de la Simulation MATLAB",
        description:
          "Le but de ce projet est de découvrir et comprendre les principes fondamentaux de l’OFDM. À travers une simulation simple réalisée dans MATLAB, nous allons explorer les étapes principales d’une chaîne de transmission OFDM :",
        optionsList: {
          type: "ordered",
          options: [
            "Générer des données et les moduler.",
            "Transmettre ces données à travers un canal bruité (incluant des décalages fréquenciels).",
            "La télévision numérique (DVB-T).",
            "Récupérer et analyser les données reçues pour mesurer les performances du système.",
          ],
        },
      },
      {
        title: "",
        description:
          "En simplifiant les concepts, nous visons à rendre cette technologie accessible même à un niveau débutant. L’accent sera mis sur les composants essentiels de la chaîne de transmission et sur leur rôle dans le processus global.",
      },
    ],
  },
  {
    sectionTitle: "2 Structure de la Chaîne de Transmission OFDM",
    subsections: [
      {
        title: "",
        description:
          "Dans cette section, nous allons décomposer et expliquer la structure d’une chaîne de transmission OFDM, en mettant en lumière les différents composants et leur rôle. Cette approche permettra de mieux comprendre le fonctionnement global du système et les interactions entre ses éléments.",
      },
      {
        title: "2.1 Génération des Données (Payload)",
        description:
          "La première étape de la chaîne consiste à générer les données numériques à transmettre. Ces données sont souvent représentées sous forme de bits binaires (0 et 1), qui seront regroupés pour former le 'payload'. Par exemple, dans notre simulation MATLAB .",
        optionsList: {
          type: "unordered",
          options: [
            "On génère un grand nombre de bits aléatoires.",
            "Ces bits représentent l’information que nous voulons envoyer, comme un message texte ou un fichier.",
          ],
        },
      },
      {
        title: "2.2 Modulation et Traitement à l’Émetteur (Transmitter)",
        description:
          "Le signal OFDM est obtenu en appliquant une transformation inverse de Fourier discrète (IFFT) sur les données modulées. Cette étape divise le signal en plusieurs sous-porteuses orthogonales.",
        subsections: [
          {
            title: "Modulation QAM (Quadrature Amplitude Modulation):",
            description:
              "Cette étape consiste à mapper les bits en symboles complexes qui seront envoyés sur les sous-porteuses.",
            optionsList: {
              type: "unordered",
              options: [
                "Par exemple, avec une modulation 4-QAM, chaque paire de bits est convertie en un symbole complexe.",
                "Cela permet de transmettre plusieurs bits en une seule transmission.",
              ],
            },
          },
          {
            title: "IFFT (Transformée de Fourier Inverse) :",
            description:
              "Une fois les symboles générés, la technique OFDM utilise une IFFT pour convertir les données en un signal temps continu.",
            optionsList: {
              type: "unordered",
              options: [
                "Cela permet de placer chaque symbole sur une sous-porteuse différente, tout en assurant leur orthogonalité.",
              ],
            },
          },
          {
            title: "Ajout du Préfixe Cyclique :",
            description:
              "Un préfixe cyclique est ajouté au début de chaque symbole OFDM.",
            optionsList: {
              type: "unordered",
              options: [
                "Ce préfixe protège le signal contre les interférences entre symboles (ISI) causées par les échos dans le canal.",
              ],
            },
          },
        ],
      },
      {
        title: "2.3 Le Canal de Transmission",
        description:
          "Dans une communication réelle, le signal transmis passe par un canal qui peut altérer sa qualité.",
        optionsList: {
          type: "unordered",
          options: [
            "Ajout de Bruit (AWGN) : Le canal peut introduire du bruit (Additive White Gaussian Noise), qui dégrade le signal.",
            "Décalages Fréquentiels : En environnement mobile, des erreurs de synchronisation ou des mouvements rapides peuvent provoquer des décalages en fréquence. Ces effets sont simulés dans MATLAB pour évaluer la robustesse du système.",
          ],
        },
      },
      {
        title: "",
        description:
          "Le canal est souvent le composant le plus imprévisible et le plus critique dans la chaîne de transmission.",
      },
      {
        title: "2.4 Réception et Traitement au Récepteur (Receiver)",
        description:
          "Le récepteur est chargé de récupérer et de reconstruire les données initiales à partir du signal reçu. Cela inclut :",
        optionsList: {
          type: "ordered",
          options: [
            "Suppression du Préfixe Cyclique : Le préfixe cyclique est retiré pour isoler les symboles OFDM d’origine.",
            "FFT (Transformée de Fourier) : La FFT est utilisée pour transformer le signal reçu en domaine fréquentiel, récupérant ainsi les symboles modulés sur chaque sous-porteuse.",
            "Démodulation QAM :Les symboles sont convertis en bits binaires en inversant le processus de modulation",
            "Détection des Erreurs : En comparant les bits transmis et reçus, le taux d’erreur binaire (BER) est calculé pour évaluer les performances.",
          ],
        },
      },
      {
        title: "2.5 Visualisation des Données et Performances",
        description:
          "Un aspect clé de la simulation est la visualisation des différents signaux et étapes :",
        optionsList: {
          type: "unordered",
          options: [
            "Diagramme de constellation pour comparer les symboles transmis et reçus.",
            "Spectre de puissance pour examiner les propriétés fréquentielles.",
            "Graphiques du taux d’erreur binaire (BER) pour évaluer la qualité de la transmission.",
          ],
        },
      },
    ],
  },
  {
    sectionTitle: "3. Simulation MATLAB : Chaîne de Transmission OFDM",
    subsections: [
      {
        title: "3.1 Initialisation des paramètres système",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  params.numSubcarriers = 64;      // Nombre de sous-porteuses
  params.cyclicPrefixLen = 16;     // Longueur du préfixe cyclique
  params.modOrder = 4;             // Ordre de modulation QAM (4-QAM)
  params.numFrames = 5;            // Nombre de trames à transmettre
  params.frameSize = 100;          // Nombre de symboles par trame
  params.SNR = 20;                 // Rapport signal-bruit en dB
  params.frequencyOffset = 100;    // Décalage de fréquence (Hz)
  params.sampleRate = 1000;        // Fréquence d'échantillonnage (Hz)
            `,
          },
          {
            title: "Explication",
            description: `
  Les paramètres système définissent les caractéristiques de la simulation.
            `,
            optionsList: {
              type: "unordered",
              options: [
                "Sous-porteuses : Le nombre de canaux parallèles utilisés dans l’OFDM.",
                "Préfixe cyclique : Partie répétée pour éviter les interférences entre symboles (ISI).",
                "Modulation QAM : Ordre de modulation, ici 4-QAM (chaque symbole représente 2 bits).",
                "Rapport SNR : Indique la qualité du canal (20 dB dans ce cas).",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
  L’objectif est de configurer un environnement réaliste pour tester les performances d'une chaîne OFDM dans des conditions spécifiques.
            `,
          },
        ],
      },
      {
        title: "3.2 Génération des données",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  numBits = params.numSubcarriers * params.frameSize * log2(params.modOrder);
  dataBits = randi([0 1], numBits, params.numFrames); // Bits aléatoires
            `,
          },
          {
            title: "Explication",
            description: `
  Le code génère une matrice de bits aléatoires pour représenter les données à transmettre.
  Le nombre total de bits est calculé en fonction du nombre de sous-porteuses, de la taille des trames, et de l’ordre de modulation.
            `,
          },
          {
            title: "Conclusion",
            description: `
  Cette étape constitue la base de la simulation, en créant les données brutes qui seront modifiées tout au long de la chaîne.
            `,
          },
        ],
      },
      {
        title: "3.3 Traitement côté émetteur",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  frameDataBits = dataBits(:, frameIdx);
  qamSymbols = qammod(frameDataBits, params.modOrder, 'InputType', 'bit', 'UnitAveragePower', true);
  dataSymbolsMatrix = reshape(qamSymbols, params.numSubcarriers, []);
  ifftOutput = ifft(dataSymbolsMatrix, params.numSubcarriers);
  cyclicPrefix = ifftOutput(end-params.cyclicPrefixLen+1:end, :);
  ofdmSignal = [cyclicPrefix; ifftOutput];
            `,
          },
          {
            title: "Explication",
            description: `
            `,
            optionsList: {
              type: "ordered",
              options: [
                "Modulation QAM : Conversion des bits en symboles complexes adaptés à la transmission.",
                "IFFT : Transformation des symboles en signal temporel tout en répartissant les symboles sur les sous-porteuses.",
                "Ajout du préfixe cyclique : Ajout d'une copie de la fin du symbole pour protéger contre les interférences.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
  L’émetteur prépare les données pour leur transmission en transformant les bits en un signal robuste et orthogonal.
            `,
          },
        ],
      },
      {
        title: "3.4 Application des dégradations du canal",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
freqOffsetEffect = exp(1j * 2 * pi * params.frequencyOffset * time.');
rxSignal(:, frameIdx) = awgn(txSignal .* freqOffsetEffect, params.SNR, 'measured');
          `,
          },
          {
            title: "Explication",
            description: `
Le canal simule deux principales dégradations :
          `,
            optionsList: {
              type: "unordered",
              options: [
                "Décalage fréquentiel : Une modification artificielle pour représenter les imperfections du matériel.",
                "Bruit AWGN : Ajout de bruit gaussien pour simuler des interférences.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
Cette étape teste la robustesse du système OFDM face aux conditions réelles de transmission.
          `,
          },
        ],
      },
      {
        title: "3.5 Visualisation du canal",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
subplot(2, 1, 1);
plot(real(transmittedSignal(:, 1)));
title('Signal transmis (trame 1)');
subplot(2, 1, 2);
plot(real(rxSignal(:, 1)));
title('Signal reçu (trame 1)');
          `,
          },
          {
            title: "Explication",
            description: `
Les graphiques comparent le signal transmis et le signal reçu pour observer les dégradations subies pendant la transmission.
          `,
          },
          {
            title: "Conclusion",
            description: `
Cette visualisation est cruciale pour comprendre comment le canal impacte les données transmises.
          `,
          },
        ],
      },
      {
        title: "3.6 Traitement côté récepteur",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
rxSignalFrame = reshape(rxSignal(:, frameIdx), params.numSubcarriers + params.cyclicPrefixLen, []);
rxSignalFrame = rxSignalFrame(params.cyclicPrefixLen+1:end, :);
fftOutput = fft(rxSignalFrame, params.numSubcarriers);
rxBits = qamdemod(fftOutput(:), params.modOrder, 'OutputType', 'bit', 'UnitAveragePower', true);
[numErrors, ber(frameIdx)] = biterr(frameDataBits, rxBits);
          `,
          },
          {
            title: "Explication",
            description: `
          `,
            optionsList: {
              type: "ordered",
              options: [
                "Suppression du préfixe cyclique : On isole le signal utile.",
                "FFT : Conversion en domaine fréquentiel pour récupérer les symboles modulés.",
                "Démodulation QAM : Les symboles sont reconvertis en bits.",
                "Calcul du BER : Le taux d’erreur est calculé pour évaluer les performances.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
Le récepteur reconstitue les données et mesure les erreurs pour vérifier l’efficacité de la chaîne de transmission.
          `,
          },
        ],
      },
      {
        title: "3.7 Visualisation des performances",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
plot(1:params.numFrames, ber, '-o');
title('Taux d''erreur binaire (BER) par trame');
          `,
          },
          {
            title: "Explication",
            description: `
Le BER (Bit Error Rate) est tracé pour chaque trame. Un BER faible indique une transmission efficace malgré les perturbations.
          `,
          },
          {
            title: "Conclusion",
            description: `
La visualisation permet d’évaluer quantitativement la qualité de la transmission et de valider les choix techniques.
          `,
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "4. Résultats et Analyse",
    subsections: [
      {
        title: "4.1 Impact du canal (bruit, décalage fréquentiel)",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  figure;
  subplot(2, 1, 1);
  plot(real(transmittedSignal(:, 1)));
  title('Signal transmis (trame 1)');
  xlabel('Échantillons');
  ylabel('Amplitude');
  grid on;
  
  subplot(2, 1, 2);
  plot(real(rxSignal(:, 1)));
  title('Signal reçu (trame 1)');
  xlabel('Échantillons');
  ylabel('Amplitude');
  grid on;
            `,
          },
          {
            title: "Explication",
            description: `
  Cette visualisation montre clairement la dégradation subie par le signal transmis lors de son passage à travers le canal.
            `,
            optionsList: {
              type: "unordered",
              options: [
                "Bruit ajouté par le canal qui affecte l’amplitude et la phase.",
                "Effet du décalage fréquentiel visible sous forme de distorsion temporelle.",
                "Importance d’une compensation efficace des dégradations.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
  Les imperfections du canal, notamment le bruit et le décalage fréquentiel, nécessitent des techniques de correction au niveau du récepteur.
            `,
          },
        ],
      },
      {
        title: "4.2 Performances du récepteur : analyse du taux d’erreur (BER)",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  figure;
  plot(1:params.numFrames, ber, '-o');
  title('Taux d''erreur binaire (BER) par trame');
  xlabel('Trame');
  ylabel('BER');
  grid on;
            `,
          },
          {
            title: "Explication",
            description: `
  Le graphique illustre l'évolution du taux d'erreur binaire (BER) pour chaque trame transmise.
            `,
            optionsList: {
              type: "unordered",
              options: [
                "BER faible à SNR élevé, indiquant de bonnes performances du récepteur.",
                "Variations mineures dues au bruit aléatoire et aux conditions du canal.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
  Le récepteur montre une efficacité globale avec un BER faible, validant les techniques de modulation et de traitement.
            `,
          },
        ],
      },
      {
        title: "4.3 Rôle du préfixe cyclique pour minimiser les interférences",
        description: "",
        subsections: [
          {
            title: "Code",
            description: "",
            code: `
  % Suppression du préfixe cyclique
  rxSignalFrame = reshape(rxSignal(:, frameIdx), params.numSubcarriers + params.cyclicPrefixLen, []);
  rxSignalFrame = rxSignalFrame(params.cyclicPrefixLen+1:end, :);
            `,
          },
          {
            title: "Explication",
            description: `
  Le préfixe cyclique protège contre les interférences inter-symboles (ISI) dans les signaux OFDM.
            `,
            optionsList: {
              type: "unordered",
              options: [
                "Prévention de la superposition des symboles.",
                "Maintien de l’intégrité des symboles OFDM après suppression du préfixe.",
              ],
            },
          },
          {
            title: "Conclusion",
            description: `
  L’ajout du préfixe cyclique est essentiel pour garantir une transmission robuste, particulièrement dans des environnements à retards multiples.
            `,
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "5. Conclusion",
    subsections: [
      {
        title: "5.1 Synthèse des étapes principales d'une transmission OFDM",
        description: `
  La simulation MATLAB a permis de suivre toutes les étapes cruciales :
        `,
        optionsList: {
          type: "ordered",
          options: [
            "Génération et modulation des données.",
            "Transformation IFFT/FFT et ajout du préfixe cyclique.",
            "Transmission via un canal bruité avec décalage fréquentiel.",
            "Traitement du signal côté récepteur, suppression du préfixe cyclique, FFT, et démodulation QAM.",
            "Analyse des performances (BER).",
          ],
        },
      },
      {
        title: "5.2 Importance de chaque composant dans le processus",
        description: "Chaque composant joue un rôle crucial :",
        optionsList: {
          type: "unordered",
          options: [
            "Modulation QAM : efficacité spectrale.",
            "IFFT/FFT : transmission robuste sur plusieurs voies.",
            "Préfixe cyclique : protection contre les interférences.",
            "Compensation des dégradations : récupération correcte du signal.",
          ],
        },
      },
      {
        title: "5.3 Simplicité et efficacité de la simulation MATLAB",
        description: `
  MATLAB est un outil puissant pour visualiser et comprendre les concepts complexes de l'OFDM. Il permet une exploration facile de l'impact des paramètres système et des techniques avancées de traitement.
        `,
      },
      {
        title: "Conclusion générale",
        description: `
  L'OFDM, bien que complexe, devient accessible grâce à MATLAB. Cette simulation met en évidence les principes fondamentaux, renforçant sa pertinence pour des systèmes modernes tels que la 4G, 5G, et le Wi-Fi.
        `,
      },
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Documentation data={sampleData} />
    </div>
  );
}

export default App;

// {
//   sectionTitle: "Getting Started",
//   subsections: [
//     {
//       title: "Installation",
//       description:
//         "Follow these steps to install the package in your project.",
//       optionsList: {
//         type: "ordered",
//         options: [
//           "Install Node.js from nodejs.org",
//           "Open your terminal",
//           "Navigate to your project directory",
//         ],
//       },
//       code: "npm install @example/package",
//       subsections: [
//         {
//           title: "Prerequisites",
//           description: "Make sure you have the following installed:",
//           optionsList: {
//             type: "unordered",
//             options: ["Node.js 14+", "npm or yarn", "Git"],
//           },
//           code: "node --version",
//         },
//         {
//           title: "Dependencies",
//           description: "Additional dependencies you might need.",
//         },
//       ],
//     },
//     {
//       title: "Configuration",
//       description:
//         "Configure your environment with these essential settings.",
//       subsections: [
//         {
//           title: "Environment Variables",
//           description: "Set up your environment variables.",
//           code: "API_KEY=your_api_key\nSECRET=your_secret",
//         },
//       ],
//     },
//   ],
// },
// {
//   sectionTitle: "Basic Usage",
//   subsections: [
//     {
//       title: "Quick Start",
//       description: "Get up and running with this simple example.",
//       code: "import { Example } from '@example/package';\n\nconst result = Example.run();",
//       subsections: [
//         {
//           title: "Basic Example",
//           description: "A simple example to get you started.",
//           code: "const example = new Example();\nexample.initialize();",
//         },
//       ],
//     },
//   ],
// },
