export type Locale = 'es' | 'en'

type Stat = {
  value: string
  label: string
}

type BarPoint = {
  label: string
  value: number
  display: string
}

type LinkItem = {
  label: string
  href: string
}

type SkillGroup = {
  title: string
  caption: string
  items: string[]
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
  links?: LinkItem[]
}

type DetailCard = {
  title: string
  subtitle: string
  bullets: string[]
}

type ContactCard = {
  title: string
  description: string
  availability: string
  actions: {
    email: string
    linkedin: string
    github: string
    pdf: string
  }
}

export type ResumeContent = {
  metaTitle: string
  identity: {
    name: string
    role: string
    location: string
    email: string
    phone: string
    github: string
    linkedin: string
  }
  toggle: {
    es: string
    en: string
  }
  nav: {
    kicker: string
    note: string
  }
  hero: {
    badge: string
    kicker: string
    titleLines: [string, string]
    description: string
    primaryAction: string
    secondaryAction: string
    tertiaryAction: string
    quickFacts: Array<{
      label: string
      value: string
    }>
  }
  impact: {
    eyebrow: string
    title: string
    description: string
    stats: Stat[]
    chartTitle: string
    chartBars: BarPoint[]
    spotlight: {
      eyebrow: string
      title: string
      description: string
    }
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    groups: SkillGroup[]
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    items: ExperienceItem[]
  }
  project: {
    eyebrow: string
    title: string
    description: string
    name: string
    stack: string[]
    summary: string
    bullets: string[]
    metrics: string[]
    performanceTitle: string
    performanceBars: BarPoint[]
    sourceLabel: string
    sourceHref: string
  }
  details: {
    eyebrow: string
    title: string
    description: string
    extra: DetailCard
    education: DetailCard
    contact: ContactCard
  }
  footerNote: string
}

export const resumeContent: Record<Locale, ResumeContent> = {
  es: {
    metaTitle: 'Miguel Martinez | CV Backend y Full-Stack',
    identity: {
      name: 'Miguel Angel Martinez Ibarra',
      role: 'Desarrollador Backend | Desarrollador Full-Stack',
      location: 'Durango, Mexico',
      email: 'miguelangelmartinezib2611@gmail.com',
      phone: '+52 618 157 1304',
      github: 'github.com/miixkyy2611',
      linkedin: 'linkedin.com/in/miguel-angel-martinez-ibarra-b1318b281',
    },
    toggle: {
      es: 'Espanol',
      en: 'English',
    },
    nav: {
      kicker: 'CV interactivo',
      note: 'React + Tailwind CSS + Vite',
    },
    hero: {
      badge: 'Disponible para oportunidades backend y full-stack',
      kicker: 'Ingenieria de software con enfoque practico',
      titleLines: ['Miguel Angel', 'Martinez Ibarra'],
      description:
        'Ingeniero de software enfocado en desarrollo backend, SQL y sistemas full-stack. He construido modulos funcionales end-to-end con Node.js, Express, React, MySQL y APIs REST para flujos gubernamentales y soluciones moviles de reporte.',
      primaryAction: 'Escribirme',
      secondaryAction: 'Ver LinkedIn',
      tertiaryAction: 'Descargar CV',
      quickFacts: [
        {
          label: 'Base',
          value: 'Durango, Mexico',
        },
        {
          label: 'Especialidad',
          value: 'Backend, SQL, APIs REST y flujos end-to-end',
        },
        {
          label: 'Idioma',
          value: 'Ingles B2',
        },
      ],
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Experiencia aplicada en producto, datos y entrega real',
      description:
        'He trabajado en plataformas con datos sensibles, optimizacion de consultas SQL y experiencia full-stack para procesos de alto uso, siempre con foco en rendimiento, confiabilidad y claridad para el usuario final.',
      stats: [
        {
          value: '15+',
          label: 'modulos funcionales construidos',
        },
        {
          value: '20%+',
          label: 'mejora de rendimiento en plataforma',
        },
        {
          value: '4',
          label: 'ubicaciones operando con la solucion',
        },
        {
          value: '9.5/10',
          label: 'promedio final en ingenieria de software',
        },
      ],
      chartTitle: 'Visual de mejoras entregadas',
      chartBars: [
        {
          label: 'Modulos construidos',
          value: 88,
          display: '15+',
        },
        {
          label: 'Rendimiento mejorado',
          value: 72,
          display: '20%+',
        },
        {
          label: 'Ubicaciones activas',
          value: 46,
          display: '4',
        },
        {
          label: 'Base academica',
          value: 95,
          display: '9.5/10',
        },
      ],
      spotlight: {
        eyebrow: 'Fortaleza principal',
        title: 'Backend-first, con capacidad real de entrega full-stack',
        description:
          'Autenticacion, validaciones, consultas SQL, integraciones REST y cobertura frontend cuando el producto lo necesita.',
      },
    },
    skills: {
      eyebrow: 'Stack tecnico',
      title: 'Tecnologias con las que ya he construido soluciones reales',
      description:
        'Un stack centrado en backend moderno, bases de datos relacionales y entrega full-stack util para producto.',
      groups: [
        {
          title: 'Backend',
          caption: 'Servicios, reglas de negocio y arquitectura de flujos.',
          items: ['Node.js', 'Express', 'REST APIs', 'Autenticacion', 'Autorizacion', 'Logica de validacion', 'Workflows server-side'],
        },
        {
          title: 'Frontend',
          caption: 'Interfaces conectadas a producto, escritorio y movil.',
          items: ['React', 'React Native', 'Ionic', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
        },
        {
          title: 'Bases de datos',
          caption: 'Consulta, modelado y optimizacion para datos operativos.',
          items: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite', 'Firebase', 'MongoDB', 'Optimizacion SQL'],
        },
        {
          title: 'Herramientas',
          caption: 'Colaboracion, entrega y ecosistema de trabajo diario.',
          items: ['Git', 'Jira', 'Figma', 'Miro', 'Trello', 'VS Code', 'Linux', 'Windows Server', 'XAMPP', 'Python', 'Java', 'C'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia profesional',
      title: 'Roles donde backend, datos y operacion importaron de verdad',
      description:
        'Experiencia reciente en gobierno y aplicaciones moviles accesibles, con responsabilidad directa sobre modulos, consultas, integraciones y entrega funcional.',
      items: [
        {
          role: 'Ingeniero de Software',
          company: 'Agencia gubernamental (confidencial)',
          period: 'Feb 2025 - Actualidad',
          location: 'Durango, Mexico',
          bullets: [
            'Modernice flujos confidenciales que manejan datos sensibles, reemplazando procesos legados mas lentos por una plataforma mas mantenible usada en 4 ubicaciones y con mejora de rendimiento superior al 20%.',
            'Construyi y mantuve mas de 15 modulos funcionales para movimientos de registros gubernamentales usando React, Node.js/Express, MySQL y APIs REST, cada uno con UI dedicada, consultas SQL, validaciones y operaciones server-side.',
            'Optimice consultas SQL, joins, vistas y flujos de carga para miles de registros, reduciendo cuellos de botella y mejorando confiabilidad e integridad de datos en produccion mientras colaboraba con usuarios y stakeholders.',
          ],
        },
        {
          role: 'Ingeniero de Software',
          company: '911 Incluyente (proyecto de practicas profesionales)',
          period: 'Ago 2024 - Dic 2024',
          location: 'Durango, Mexico',
          bullets: [
            'Construimos una app de reporte de emergencias multiplataforma para una agencia gubernamental con enfoque en accesibilidad para personas sordas y con discapacidad auditiva, validada con pruebas reales y demostraciones en vivo.',
            'Lidere un equipo de 4 personas y desarrolle autenticacion, servicios backend y flujos clave de frontend con React Native, Node.js/Express, SQLite, APIs REST, Multer e integracion de mapas.',
            'Implemente envio de reportes, carga y consulta de contenido multimedia, y creacion de incidentes sobre mapa para Android y iOS; la app se encuentra en proceso de publicacion.',
          ],
          links: [
            {
              label: 'Ver en Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.anonymous.appjeje',
            },
          ],
        },
      ],
    },
    project: {
      eyebrow: 'Proyecto destacado',
      title: 'AlphaForecast AI',
      description:
        'Proyecto personal enfocado en analitica aplicada, series temporales y experiencia end-to-end en web.',
      name: 'AlphaForecast AI',
      stack: ['Python', 'Flask', 'Pandas', 'NumPy', 'scikit-learn', 'yfinance'],
      summary:
        'Aplicacion web de pronostico bursatil que procesa datos OHLCV, genera indicadores tecnicos y produce predicciones de corto plazo sobre activos financieros.',
      bullets: [
        'Desarrolle un flujo end-to-end con Flask, Pandas, NumPy, yfinance y scikit-learn para procesar datos, construir features y exponer resultados en web.',
        'Implemente un ensemble ponderado con HistGradientBoostingRegressor y ExtraTreesRegressor, ademas de backtesting temporal, bandas de confianza y analisis de importancia de variables.',
        'En un backtest de 10 dias para AAPL, el modelo alcanzo 1.29% de MAPE y 0.9737 de R² para predicciones a 1 dia, y 3.37% de MAPE con 0.8466 de R² en todo el horizonte.',
      ],
      metrics: ['1.29% MAPE', '0.9737 R²', '3.37% MAPE a 10 dias'],
      performanceTitle: 'Grafica de rendimiento del backtest',
      performanceBars: [
        {
          label: '1 dia MAPE',
          value: 74,
          display: '1.29%',
        },
        {
          label: '10 dias MAPE',
          value: 38,
          display: '3.37%',
        },
        {
          label: '1 dia R²',
          value: 97,
          display: '0.9737',
        },
        {
          label: '10 dias R²',
          value: 85,
          display: '0.8466',
        },
      ],
      sourceLabel: 'Ver codigo fuente',
      sourceHref: 'https://github.com/miixkyy2611/AlphaForecastAI',
    },
    details: {
      eyebrow: 'Mas informacion',
      title: 'Experiencia adicional, formacion y contacto',
      description:
        'Tambien he trabajado evaluando calidad de modelos de IA y cierro mi etapa academica con una base fuerte en ingenieria de software.',
      extra: {
        title: 'Experiencia adicional',
        subtitle: 'AI Quality Evaluator | Outlier y OneForma',
        bullets: [
          'Outlier: Jun 2024 - Mar 2026',
          'OneForma: Feb 2025 - Feb 2026',
          'Evaluacion de salidas multilingues de IA en tareas de texto, imagen, audio y video mediante anotacion, ranking y revision de calidad.',
        ],
      },
      education: {
        title: 'Educacion',
        subtitle: 'Ingenieria en Software | Universidad Politecnica de Durango',
        bullets: ['Graduado en dic 2024', 'Promedio final: 9.5/10'],
      },
      contact: {
        title: 'Hablemos',
        description:
          'Si buscas a alguien con base fuerte en backend, SQL y entrega full-stack, esta pagina resume muy bien la manera en la que trabajo.',
        availability: 'Disponible para conversar sobre oportunidades, proyectos y colaboraciones.',
        actions: {
          email: 'Enviar correo',
          linkedin: 'Abrir LinkedIn',
          github: 'Abrir GitHub',
          pdf: 'Abrir PDF',
        },
      },
    },
    footerNote: 'Sitio creado como CV interactivo bilingue en React, Tailwind CSS y Vite.',
  },
  en: {
    metaTitle: 'Miguel Martinez | Backend & Full-Stack Resume',
    identity: {
      name: 'Miguel Angel Martinez Ibarra',
      role: 'Backend Developer | Full-Stack Developer',
      location: 'Durango, Mexico',
      email: 'miguelangelmartinezib2611@gmail.com',
      phone: '+52 618 157 1304',
      github: 'github.com/miixkyy2611',
      linkedin: 'linkedin.com/in/miguel-angel-martinez-ibarra-b1318b281',
    },
    toggle: {
      es: 'Espanol',
      en: 'English',
    },
    nav: {
      kicker: 'Interactive resume',
      note: 'React + Tailwind CSS + Vite',
    },
    hero: {
      badge: 'Open to backend and full-stack opportunities',
      kicker: 'Software engineering with practical product focus',
      titleLines: ['Miguel Angel', 'Martinez Ibarra'],
      description:
        'Software engineer focused on backend development, SQL, and full-stack systems. I have built end-to-end workflow modules with Node.js, Express, React, MySQL, and REST APIs for government workflows and mobile reporting solutions.',
      primaryAction: 'Email me',
      secondaryAction: 'View LinkedIn',
      tertiaryAction: 'Download resume',
      quickFacts: [
        {
          label: 'Base',
          value: 'Durango, Mexico',
        },
        {
          label: 'Focus',
          value: 'Backend, SQL, REST APIs, and end-to-end workflows',
        },
        {
          label: 'Language',
          value: 'English B2',
        },
      ],
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Hands-on experience across product, data, and delivery',
      description:
        'I have worked on platforms with sensitive data, SQL optimization, and full-stack product flows, always with a strong focus on performance, reliability, and usability.',
      stats: [
        {
          value: '15+',
          label: 'functional modules delivered',
        },
        {
          value: '20%+',
          label: 'platform performance improvement',
        },
        {
          value: '4',
          label: 'locations using the solution',
        },
        {
          value: '9.5/10',
          label: 'final software engineering GPA',
        },
      ],
      chartTitle: 'Visual snapshot of delivered improvements',
      chartBars: [
        {
          label: 'Modules built',
          value: 88,
          display: '15+',
        },
        {
          label: 'Performance uplift',
          value: 72,
          display: '20%+',
        },
        {
          label: 'Active locations',
          value: 46,
          display: '4',
        },
        {
          label: 'Academic foundation',
          value: 95,
          display: '9.5/10',
        },
      ],
      spotlight: {
        eyebrow: 'Core strength',
        title: 'Backend-first mindset with real full-stack delivery',
        description:
          'Authentication, validation logic, SQL workflows, REST integrations, and frontend coverage when the product requires it.',
      },
    },
    skills: {
      eyebrow: 'Technical stack',
      title: 'Technologies I already use to build real products',
      description:
        'A stack centered on modern backend work, relational databases, and practical full-stack delivery.',
      groups: [
        {
          title: 'Backend',
          caption: 'Services, business rules, and workflow architecture.',
          items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Authorization', 'Validation logic', 'Server-side workflows'],
        },
        {
          title: 'Frontend',
          caption: 'Interfaces connected to product, web, and mobile.',
          items: ['React', 'React Native', 'Ionic', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
        },
        {
          title: 'Databases',
          caption: 'Querying, modeling, and optimization for operational data.',
          items: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite', 'Firebase', 'MongoDB', 'SQL optimization'],
        },
        {
          title: 'Tools',
          caption: 'Collaboration, delivery, and daily engineering workflow.',
          items: ['Git', 'Jira', 'Figma', 'Miro', 'Trello', 'VS Code', 'Linux', 'Windows Server', 'XAMPP', 'Python', 'Java', 'C'],
        },
      ],
    },
    experience: {
      eyebrow: 'Professional experience',
      title: 'Roles where backend, data, and operations truly mattered',
      description:
        'Recent work in government systems and accessible mobile applications, with direct ownership of modules, queries, integrations, and working delivery.',
      items: [
        {
          role: 'Software Engineer',
          company: 'Government Agency (Confidential)',
          period: 'Feb 2025 - Present',
          location: 'Durango, Mexico',
          bullets: [
            'Modernized confidential workflows that handle sensitive data, replacing slower legacy processes with a more maintainable platform used across 4 locations and improving performance by more than 20%.',
            'Built and maintained more than 15 functional workflow modules for government record movements using React, Node.js/Express, MySQL, and REST APIs, each with dedicated UI flows, SQL queries, validations, and server-side operations.',
            'Optimized SQL queries, joins, views, and loading workflows for thousands of records, reducing bottlenecks and improving production reliability and data integrity while collaborating with users and stakeholders.',
          ],
        },
        {
          role: 'Software Engineer',
          company: '911 Incluyente (Professional Internship Project)',
          period: 'Aug 2024 - Dec 2024',
          location: 'Durango, Mexico',
          bullets: [
            'Built a cross-platform emergency reporting app for a government agency focused on deaf and hard-of-hearing accessibility, validated through real-user testing and live demos.',
            'Led a 4-person team and developed authentication, backend services, and key frontend flows using React Native, Node.js/Express, SQLite, REST APIs, Multer, and map integration.',
            'Implemented report submission, multimedia upload and retrieval, and map-based incident creation for Android and iOS; the app is currently in the publication process.',
          ],
          links: [
            {
              label: 'View on Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.anonymous.appjeje',
            },
          ],
        },
      ],
    },
    project: {
      eyebrow: 'Featured project',
      title: 'AlphaForecast AI',
      description:
        'Personal project focused on applied analytics, time-series modeling, and end-to-end web delivery.',
      name: 'AlphaForecast AI',
      stack: ['Python', 'Flask', 'Pandas', 'NumPy', 'scikit-learn', 'yfinance'],
      summary:
        'Stock forecasting web application that processes OHLCV data, engineers technical indicators, and produces short-term predictions for financial assets.',
      bullets: [
        'Built an end-to-end workflow with Flask, Pandas, NumPy, yfinance, and scikit-learn to process data, engineer features, and expose predictions on the web.',
        'Implemented a weighted ensemble using HistGradientBoostingRegressor and ExtraTreesRegressor, plus temporal backtesting, confidence bands, and feature-importance analysis.',
        'In a 10-day AAPL backtest, the model achieved 1.29% MAPE and 0.9737 R² for 1-day predictions, plus 3.37% MAPE and 0.8466 R² across the full horizon.',
      ],
      metrics: ['1.29% MAPE', '0.9737 R²', '3.37% MAPE over 10 days'],
      performanceTitle: 'Backtest performance chart',
      performanceBars: [
        {
          label: '1-day MAPE',
          value: 74,
          display: '1.29%',
        },
        {
          label: '10-day MAPE',
          value: 38,
          display: '3.37%',
        },
        {
          label: '1-day R²',
          value: 97,
          display: '0.9737',
        },
        {
          label: '10-day R²',
          value: 85,
          display: '0.8466',
        },
      ],
      sourceLabel: 'View source code',
      sourceHref: 'https://github.com/miixkyy2611/AlphaForecastAI',
    },
    details: {
      eyebrow: 'More',
      title: 'Additional experience, education, and contact',
      description:
        'I have also worked evaluating AI quality, and I completed my software engineering degree with a strong academic foundation.',
      extra: {
        title: 'Additional experience',
        subtitle: 'AI Quality Evaluator | Outlier and OneForma',
        bullets: [
          'Outlier: Jun 2024 - Mar 2026',
          'OneForma: Feb 2025 - Feb 2026',
          'Evaluated multilingual AI outputs across text, image, audio, and video tasks through annotation, ranking, and quality review.',
        ],
      },
      education: {
        title: 'Education',
        subtitle: 'Bachelor of Software Engineering | Universidad Politecnica de Durango',
        bullets: ['Graduated in Dec 2024', 'Final GPA: 9.5/10'],
      },
      contact: {
        title: 'Let us talk',
        description:
          'If you are looking for someone with a strong backend foundation, SQL depth, and full-stack execution, this page is a good snapshot of how I work.',
        availability: 'Available to talk about opportunities, products, and collaborations.',
        actions: {
          email: 'Send email',
          linkedin: 'Open LinkedIn',
          github: 'Open GitHub',
          pdf: 'Open PDF',
        },
      },
    },
    footerNote: 'This site was built as a bilingual interactive resume with React, Tailwind CSS, and Vite.',
  },
}
