export const translations = {
  pl: {
    nav: {
      bridge: "Profil",
      projects: "Projekty",
      graphics: "Technical Art",
      experience: "Doświadczenie",
      education: "Edukacja",
      documents: "Dokumenty",
      contact: "Kontakt",
      menu: "Menu",
      close: "Zamknij",
    },
    hero: {
      eyebrow: "Go / Cloud / Technical Art",
      title: "Maciej Karczmarz",
      description:
        "Łączę Go z narzędziami 3D, patrząc na wydajność i koszt obliczeń po obu stronach pipeline'u.",
      primary_cta: "Projekty",
      secondary_cta: "Pobierz CV",
      contact_cta: "Kontakt",
      profile_label: "Profil hybrydowy",
      proof: [
        "Go",
        "Blender",
        "UE5",
        "Unity",
        "Houdini",
        "AWS",
        "n8n",
        "Gaea",
        "Quixel",
        "Substance 3D Painter",
      ],
      rail: [
        { label: "Backend", value: "Go" },
        { label: "Chmura", value: "AWS / n8n / FinOps" },
        { label: "3D", value: "Blender / UE5 / Unity / Houdini" },
      ],
    },
    projects: {
      eyebrow: "Wybrane projekty",
      title: "Systemy, automatyzacje, renderery i symulacje.",
      description:
        "Projekty pokazane przez problem, ograniczenie techniczne i znaczenie praktyczne. To nie jest chmura tagów technologii, tylko przekrój przez sposób myślenia.",
      repo_btn: "Kod źródłowy",
      role_label: "Rola",
      constraint_label: "Ograniczenie",
      why_label: "Znaczenie",
      stack_label: "Technologie",
    },
    projects_items: {
      gix: {
        title: "Gix",
        role: "Backend / cloud cost engineering",
        constraint:
          "Aktualne dane walutowe, hosting i koszty utrzymania muszą pozostać pod kontrolą.",
        desc: "System monitorowania kursów walut w czasie rzeczywistym. Agreguje dane z punktów wymiany, zapewniając bieżące informacje o rynku.",
        impact:
          "Pokazuje backendowe myślenie o danych, niezawodności i FinOps: system jest hostowany na Digital Ocean i optymalizowany kosztowo zgodnie z zasadami FOCUS FinOps.",
        tech: ["Go", "FinTech", "Cloud", "Digital Ocean", "FinOps"],
      },
      ai_agent: {
        title: "AI Agent / SmartOffer",
        role: "Automatyzacja / RAG workflow engineering",
        constraint:
          "Zapytania ofertowe muszą zamieniać się w gotowe kosztorysy szybko, spójnie i według parametrów technicznych.",
        desc: "System automatyzacji dla AB Bechcicki. Przekształca zapytania w kosztorysy Premium/Budget, dobierając materiały według standardów i parametrów, nie tylko marek.",
        impact:
          "Łączy RAG, n8n i AWS w praktyczny workflow sprzedażowo-techniczny z myśleniem o skalowalności i powtarzalności procesu.",
        tech: ["n8n", "AWS", "RAG", "Automatyzacja"],
      },
      grat: {
        title: "GRAT",
        role: "Aplikacja / integracja API",
        constraint:
          "Dane środowiskowe z różnych źródeł muszą być spójne, czytelne i dostępne w jednej aplikacji.",
        desc: "Interaktywny system wizualizacji danych pogodowych. Integruje OpenWeatherMap, Google Maps i Windy w jednym widoku.",
        impact:
          "Pokazuje pracę z API, wizualizacją danych, kontekstem lokalizacji i budową użytecznego narzędzia desktopowego.",
        tech: [
          "Java",
          "JavaFX",
          "API",
          "OpenWeatherMap",
          "Google Maps",
          "Windy",
        ],
      },
      grats: {
        title: "GRATS",
        role: "Programowanie grafiki niskopoziomowe",
        constraint:
          "Renderer wymaga rozumienia pipeline'u graficznego bliżej sprzętu i API, nie tylko gotowego silnika.",
        desc: "Minimalistyczny renderer graficzny zbudowany do nauki OpenGL i fundamentów programowania grafiki.",
        impact:
          "Wzmacnia techniczne rozumienie renderingu, które później wpływa na decyzje o assetach, scenach i wydajności real-time.",
        tech: ["C++", "OpenGL", "Grafika"],
      },
      sand: {
        title: "Sand Sim",
        role: "Symulacja / myślenie o wydajności",
        constraint:
          "Duża liczba cząstek wymaga prostych, stabilnych reguł i efektywnego przeliczania zachowania materiału.",
        desc: "Symulacja fizyki cząsteczek skupiona na naturalnym zachowaniu materiałów sypkich i interakcjach środowiskowych.",
        impact:
          "Pokazuje myślenie o symulacji, wydajności obliczeń i wiarygodnym zachowaniu systemu w ruchu.",
        tech: ["C++", "Fizyka", "Symulacja"],
      },
    },
    experience: {
      eyebrow: "Doświadczenie",
      title: "Doświadczenie",
      description:
        "Konkretne doświadczenie produkcyjne w tworzeniu i optymalizacji assetów 3D dla silnika Unity.",
      types: {
        work: "Praca",
        education: "Edukacja",
      },
    },
    experience_items: [
      {
        title: "Technical Artist / Grafik 3D",
        company: "Simplicity Games",
        location: "Rzeszów",
        period: "Lis 2024 - Sty 2025",
        desc: "Projektowanie modeli w Blenderze od podstaw i na podstawie referencji, tworzenie zoptymalizowanych siatek low-poly, LOD i collision meshes. Kompozycja i obróbka tekstur PBR w Substance Painter, baking normal maps, poprawki UV oraz optymalizacja assetów pod wymagania Unity.",
      },
    ],
    education: {
      eyebrow: "Edukacja",
      title: "Edukacja",
      description:
        "Ścieżka akademicka w informatyce uzupełniona projektami z C++, analizą danych, web developmentem, AI, hackathonami i działalnością w SKNI KOD.",
      education_items: [
        {
          title: "Studia magisterskie — Informatyka",
          company: "Politechnika Rzeszowska",
          location: "Rzeszów",
          period: "Mar 2026 - Obecnie",
          desc: "Studia magisterskie na Wydziale Elektrotechniki i Informatyki. Kontynuacja rozwoju w obszarze informatyki, systemów, analizy danych i projektów technicznych.",
        },
        {
          title: "Studia inżynierskie — Informatyka",
          company: "Politechnika Rzeszowska",
          location: "Rzeszów",
          period: "Paź 2022 - Lut 2026",
          desc: "Studia inżynierskie na Wydziale Elektrotechniki i Informatyki. Projekty z C++, Python, MATLAB, R, React, AI oraz grafiki 3D; udział w NASA Space Apps Challenge, DIGIEDUHACK, Hack SPACESHIELD, Hack CARPATHIA i działalność w SKNI KOD od 2022.",
        },
        {
          title: "Matma / Fizyka / Informatyka",
          company: "Samorządowe Liceum Ogólnokształcące",
          location: "Stalowa Wola",
          period: "Wrz 2019 - Maj 2022",
          desc: "Rozszerzony profil nauk ścisłych, stanowiący fundament pod dalszy rozwój w dziedzinie inżynierii i informatyki.",
        },
      ],
    },
    technical_art: {
      eyebrow: "3D / Technical Art",
      title: "Assety i środowiska projektowane z myślą o runtime.",
      description:
        "Moje doświadczenie 3D jest produkcyjne, nie dekoracyjne: modelowanie, optymalizacja siatek, LOD, collision meshes, PBR, Unity, UE5 i proceduralne pipeline'y.",
      production_title: "Simplicity Games",
      production_label: "Produkcja",
      production_copy:
        "Tworzenie i optymalizacja modeli 3D w Blenderze, low-poly, LOD, collision meshes, PBR texturing, baking normal maps, poprawki UV i integracja assetów z Unity.",
      thesis_title: "Praca inżynierska",
      thesis_label: "Pipeline pracy",
      thesis_copy:
        "Techniki budowania poziomów gry z użyciem silnika gry: proceduralny pipeline Gaea + Houdini + Unreal Engine 5, HDA do roślinności, Auto Blend material i trzy biomy.",
      tools_title: "Narzędzia",
      tools: [
        "Blender",
        "Houdini",
        "Gaea",
        "Substance 3D Painter",
        "Unreal Engine 5",
        "Unity",
        "Quixel",
      ],
      artstation_btn: "ArtStation",
    },
    documents: {
      eyebrow: "Dokumenty",
      title: "CV i praca inżynierska",
      description: "Dostępne do pobrania lub szybkiego podglądu.",
      cv_title: "Curriculum Vitae",
      thesis_title: "Praca inżynierska",
      thesis_short: "Praca",
      cv_desc:
        "Pełne CV z projektami, doświadczeniem, edukacją, linkami i językami.",
      thesis_desc:
        "Prezentacja pracy: Techniki budowania poziomów gry z użyciem silnika gry.",
      download: "Pobierz PDF",
      open_btn: "Otwórz",
      document_label: "Dokument",
    },
    contact: {
      eyebrow: "Kontakt",
      description:
        "Jestem otwarty na role backend/cloud, FinOps, automatyzację oraz projekty łączące grafikę 3D z programowaniem.",
      email: "maciekkar1305@gmail.com",
      links_title: "Linki",
      visit_btn: "Profil",
      email_btn: "Napisz email",
    },
  },
  en: {
    nav: {
      bridge: "Profile",
      projects: "Work",
      graphics: "Technical Art",
      experience: "Experience",
      education: "Education",
      documents: "Documents",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Go / Cloud / Technical Art",
      title: "Maciej Karczmarz",
      description:
        "I connect Go with 3D tools, focusing on performance and compute cost across both sides of the pipeline.",
      primary_cta: "Projects",
      secondary_cta: "Download CV",
      contact_cta: "Contact",
      profile_label: "Hybrid profile",
      proof: [
        "Go",
        "Blender",
        "UE5",
        "Unity",
        "Houdini",
        "AWS",
        "n8n",
        "Gaea",
        "Quixel",
        "Substance 3D Painter",
      ],
      rail: [
        { label: "Backend", value: "Go" },
        { label: "Cloud", value: "AWS / n8n / FinOps" },
        { label: "3D", value: "Blender / UE5 / Unity / Houdini" },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Systems, automation, renderers, and simulations.",
      description:
        "Projects shown through the problem, technical constraint, and practical value. This is not a technology tag cloud; it is a cross-section of how I think.",
      repo_btn: "Source code",
      role_label: "Role",
      constraint_label: "Constraint",
      why_label: "Why it matters",
      stack_label: "Stack",
    },
    projects_items: {
      gix: {
        title: "Gix",
        role: "Backend / cloud cost engineering",
        constraint:
          "Live exchange-rate data, hosting, and operating cost have to stay controlled.",
        desc: "Real-time currency monitoring system. Aggregates data from exchange points to provide current market insight.",
        impact:
          "Shows backend thinking around data, reliability, and FinOps: hosted on Digital Ocean and optimized for cost efficiency using FOCUS FinOps principles.",
        tech: ["Go", "FinTech", "Cloud", "Digital Ocean", "FinOps"],
      },
      ai_agent: {
        title: "AI Agent / SmartOffer",
        role: "Automation / RAG workflow engineering",
        constraint:
          "Incoming requests need to become ready-to-use estimates quickly, consistently, and according to technical parameters.",
        desc: "Automation system for AB Bechcicki. Transforms inquiries into Premium/Budget estimates by selecting materials based on standards and parameters, not only brands.",
        impact:
          "Connects RAG, n8n, and AWS into a practical sales/technical workflow with scalability and process repeatability in mind.",
        tech: ["n8n", "AWS", "RAG", "Automation"],
      },
      grat: {
        title: "GRAT",
        role: "Application / API integration",
        constraint:
          "Environmental data from multiple sources has to become consistent, readable, and available in one application.",
        desc: "Interactive weather data visualization system. Integrates OpenWeatherMap, Google Maps, and Windy into one view.",
        impact:
          "Shows API integration, data visualization, location context, and practical desktop-tool thinking.",
        tech: [
          "Java",
          "JavaFX",
          "API",
          "OpenWeatherMap",
          "Google Maps",
          "Windy",
        ],
      },
      grats: {
        title: "GRATS",
        role: "Low-level graphics programming",
        constraint:
          "A renderer requires understanding the graphics pipeline closer to hardware and API behavior, not only finished engines.",
        desc: "Minimal graphics renderer built to explore OpenGL and graphics programming fundamentals.",
        impact:
          "Strengthens technical rendering knowledge that informs later asset, scene, and real-time performance decisions.",
        tech: ["C++", "OpenGL", "Graphics"],
      },
      sand: {
        title: "Sand Sim",
        role: "Simulation / performance thinking",
        constraint:
          "A high number of particles needs simple, stable rules and efficient behavior updates.",
        desc: "Granular physics simulation focused on natural particle behavior and environmental interactions.",
        impact:
          "Shows simulation thinking, compute efficiency, and believable behavior under motion.",
        tech: ["C++", "Physics", "Simulation"],
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience",
      description:
        "Concrete production experience creating and optimizing 3D assets for Unity engine requirements.",
      types: {
        work: "Work",
        education: "Education",
      },
    },
    experience_items: [
      {
        title: "Technical Artist / 3D Artist",
        company: "Simplicity Games",
        location: "Rzeszow",
        period: "Nov 2024 - Jan 2025",
        desc: "Designed models in Blender from scratch and from references, created optimized low-poly meshes, LODs, and collision meshes. Composed and processed PBR textures in Substance Painter, baked normal maps, improved UVs, and optimized assets for Unity Engine requirements.",
      },
    ],
    education: {
      eyebrow: "Education",
      title: "Education",
      description:
        "Computer Science path supplemented by C++ development, data analysis, web projects, AI research, hackathons, and SKNI KOD activity.",
      education_items: [
        {
          title: "Master's Studies — Computer Science",
          company: "Rzeszow University of Technology",
          location: "Rzeszow",
          period: "March 2026 - Present",
          desc: "Master's Studies at the Faculty of Electrical and Computer Engineering. Continuing development across computer science, systems, data analysis, and technical projects.",
        },
        {
          title: "Bachelor's Studies — Computer Science",
          company: "Rzeszow University of Technology",
          location: "Rzeszow",
          period: "Oct 2022 - Feb 2026",
          desc: "Bachelor's Studies at the Faculty of Electrical and Computer Engineering. Projects across C++, Python, MATLAB, R, React, AI, and 3D graphics; participated in NASA Space Apps Challenge, DIGIEDUHACK, Hack SPACESHIELD, Hack CARPATHIA, and SKNI KOD since 2022.",
        },
        {
          title: "Math / Physics / CS",
          company: "Public General Secondary School",
          location: "Stalowa Wola",
          period: "Sep 2019 - May 2022",
          desc: "Advanced science profile providing a strong foundation for future engineering and computer-science development.",
        },
      ],
    },
    technical_art: {
      eyebrow: "3D / Technical Art",
      title: "Assets and environments designed with runtime in mind.",
      description:
        "My 3D experience is production-minded, not decorative: modeling, mesh optimization, LODs, collision meshes, PBR, Unity, UE5, and procedural pipelines.",
      production_title: "Simplicity Games",
      production_label: "Production",
      production_copy:
        "Created and optimized 3D models in Blender, including low-poly meshes, LODs, collision meshes, PBR texturing, normal-map baking, UV improvements, and Unity asset integration.",
      thesis_title: "Engineering Thesis",
      thesis_label: "Thesis pipeline",
      thesis_copy:
        "Game Level Building Techniques Using a Game Engine: procedural Gaea + Houdini + Unreal Engine 5 pipeline, vegetation HDA tools, Auto Blend material, and three biomes.",
      tools_title: "Tools",
      tools: [
        "Blender",
        "Houdini",
        "Gaea",
        "Substance 3D Painter",
        "Unreal Engine 5",
        "Unity",
        "Quixel",
      ],
      artstation_btn: "ArtStation",
    },
    documents: {
      eyebrow: "Documents",
      title: "CV and engineering thesis",
      description: "Available for download or quick review.",
      cv_title: "Curriculum Vitae",
      thesis_title: "Engineering Thesis",
      thesis_short: "Thesis",
      cv_desc:
        "Full CV with projects, experience, education, links, and languages.",
      thesis_desc:
        "Thesis presentation: Game Level Building Techniques Using a Game Engine.",
      download: "Download PDF",
      open_btn: "Open",
      document_label: "Document",
    },
    contact: {
      eyebrow: "Contact",
      description:
        "I am open to backend/cloud roles, FinOps, automation work, and projects connecting 3D graphics with programming.",
      email: "maciekkar1305@gmail.com",
      links_title: "Links",
      visit_btn: "Profile",
      email_btn: "Email me",
    },
  },
};
