$(function () {
    var languages = ['pt_br', 'en'];

    // Dictionary
    var t = {
        "Change to English": {
            en: "Mudar para Portugu\xEAs"
        },
        "Sobre": {
            en: "About"
        },
        "Resumo": {
            en: "Summary"
        },
        portfolio: {
            pt_br: "Portif\xF3lio",
            en: "Portfolio"
        },
        skills: {
            pt_br: "Compet\xEAncias e Certificados",
            en: "Skills and Certifications"
        },
        "Trabalho": {
            en: "Work"
        },
        study: {
            pt_br: "Estudo e L\xEDnguas",
            en: "Study and Language"
        },
        "Contato": {
            en: "Contact"
        },
        age: {
            en: "-years-old",
            pt_br: " anos"
        },
        "brasileiro": {
            en: "Brazilian"
        },
        "solteiro": {
            en: "single"
        },
        "more-info": {
            en: "More Info",
            pt_br: "Mais Informações"
        },
        "Curr\xEDculo": {
            en: "R\xE9sum\xE9"
        },
        "Pontua\xE7\xE3o": {
            en: "Score"
        },
        summary: {
            pt_br: "Profissional de TI focado na <strong>Gestão de Produto</strong> com espírito não apenas <strong>criativo</strong>, mas <strong>inovador</strong>. Entre meus pontos fortes estão <strong>bom relacionamento interpessoal</strong>, <strong>rápido aprendizado</strong> e <strong>sede de conhecimento</strong>. Com mais de <strong>5 anos</strong> de experiência profissional, sigo evoluindo e aprendendo novas formas de integrar a <strong>Tecnologia</strong> com várias áreas: <strong>Desenvolvimento</strong>, <strong>Marketing</strong>, <strong>Comercial</strong> e <strong>Customer Success</strong>.",
            en: "IT Professional specialized on <strong>Product Management</strong> with a <strong>creative</strong> spirit and <strong>innovative</strong> behavior. I can list as strengths a impecable <strong>interpersonal relationship</strong>, fast <strong>learning skills</strong> and thirst of <strong>knowledge</strong>. With over <strong>5 years</strong> of work experience, I keep evolving and learning new ways of integrating <strong>Technology</strong> to several areas: <strong>Development</strong>, <strong>Marketing</strong>, <strong>Sales</strong> and <strong>Customer Success</strong>."
        },
        successForm: {
            pt_br: "Mensagem enviada com sucesso!",
            en: "Message successfully sent!"
        },
        errorForm: {
            pt_br: "H\xE1 algum erro no formul\xE1rio.",
            en: "Please check your entries."
        },
        workJob0: {
            pt_br: "Gerente de Produto",
            en: "Product Manager"
        },
        workJobTime0: {
            pt_br: "de Janeiro de 2017 at\xE9 atualmente",
            en: "January 2017 - Present"
        },
        workContent0: {
            pt_br: "Responsável pela Gestão de Produto da empresa e pela integração entre as áreas Comercial (negócio) e Operação (Suporte e Desenvolvimento). Gerenciamento e acompanhamento do roadmap e do Portfólio." + "<br>" +
            "Criação de protótipos de interfaces (focadas em UI/UX), análise de requisitos, desenho de fluxos das soluções existentes e de novas funcionalidades. Integração e adequação de produtos de parceiros ao Portfólio da empresa. Aplicação de estratégias de Growth e ferramentas que auxiliem a alavancar os produtos. Comunicação sobre a evolução dos produtos. Documentação e treinamento à equipe sobre os produtos.",
            en: "Responsible for the company’s Product Management and for Sales (Business) and Operation (Dev and Customer Success) communication. Roadmap and Portfolio’s monitoring and management." + "<br>" +
            "Interface prototype creation (focused on UI / UX), requirements analysis, flows drawing of existing solutions and new features. Integration and adaptation of partners' products to the company portfolio. Application of Growth strategies and tools to help boost products. Communication about the evolution of products. Documentation and training to the team about the products."
        },
        workJob1: {
            pt_br: "Analista de Neg\xF3cios",
            en: "IT Business Analyst"
        },
        workJobTime1: {
            pt_br: "de Novembro de 2014 at\xE9 Janeiro de 2017",
            en: "November 2014 - January 2017"
        },
        workContent1: {
            pt_br: "Marketing Digital da empresa incluindo: planejamento de estratégias para SEO, redes sociais (Facebook, Instagram, Twitter e Linkedin), mídias pagas (AdWords, Facebook Ads e Linkedin Ads), geração de conteúdo para o Blog e material rico (Inbound Marketing), email marketing e cold email (Outbound Marketing), endomarketing, Analytics, otimização de Landing Pages, Storytelling, dentre outros assuntos relacionados. Relacionamento direto com Clientes e gerenciamento de Canais. Criação de material para Inteligência de Mercado (análise de concorrentes, enriquecimento de listas, aporte para prospecção).",
            en: "Full Stack Marketer, including: marketing planning for SEO and SEM, social media (Facebook, Instagram, Linkedin), PPC (AdWords, Facebook Ads, Linkedin Ads), content marketing strategy for blog posts (Inbound Marketing), email marketing and cold email (Outbound Marketing), endomarketing, Analytics, Landing Pages optimisation, Storytelling, among other related matters. Client and Partners-close relationship. Creation of Business Intelligence content (competition analysis, lists enrichment, contribution for prospecting)."
        },
        workJob2: {
            pt_br: "Analista de Suporte",
            en: "Costumer Service"
        },
        workJobTime2: {
            pt_br: "de Mar\xE7o de 2013 at\xE9 Novembro de 2014 (1 ano e 9 meses)",
            en: "March 2013 - November 2014 (1 year 9 months)"
        },
        workContent2: {
            pt_br: "Realiza\xE7\xE3o de treinamentos para novos colaboradores e capacita\xE7\xE3o dos veteranos, auditoria em chamados, mapeamento de processos do departamento Suporte, atendimento a Clientes por telefone, email e portal Web, levantamento de estat\xEDsticas de desempenho mensal e documenta\xE7\xE3o das solu\xE7\xF5es.",
            en: "Customer Success new employees training and veteran employees coaching. Customer Success attendance throught phone, email and website. Tickets auditing. Monthly KPI statistics analysis. Client-side and employee-side services documentation."
        },
        workJob3: {
            pt_br: "Analista de Processos",
            en: "IT Process Analyst"
        },
        workJobTime3: {
            pt_br: "de Novembro de 2012 at\xE9 Fevereiro de 2013 (4 meses)",
            en: "November 2012 - February 2013 (4 months)"
        },
        workContent3: {
            pt_br: "Est\xE1gio n\xE3o-obrigat\xF3rio." + "<br>" +
            "Mapeamento de processos organizacionais da Coordenadoria de Registro de Diplomas, melhoria do processo de aquisi\xE7\xE3o de material da Universidade Federal de Goi\xE1s, entrevista para coleta de dados e aux\xEDlio na elabora\xE7\xE3o do novo \xEDndice de tipos documentais.",
            en: "Non-mandatory internship." + "<br>" +
            "University Degree Registration Coordination's organizational process mapping. Material acquisition process' improvement of the Federal University of Goi\xE1s. Interview for data collection and assistance in the elaboration of the new index of documentary types."
        },
        tools: {
            pt_br: "Ferramentas utilizadas:",
            en: "Tools used:"
        },
        portfolioContent1: {
            pt_br: "Portal de Gerenciamento e Acompanhamento Centralizado dos Indicadores de vários departamentos de uma empresa, integrando diversos bancos de dados e fontes de informação",
            en: "KPI Management portal with centralized monitoring of the company’s department, integrating several databases and information sources"
        },
        portfolioContent2: {
            pt_br: "Portal de Lançamentos do Cinema, Netflix e HBO Go desenvolvido em React",
            en: "Cinema, Netflix and HBO Go releases and new additions portal developed using React"
        },
        portfolioContent3: {
            pt_br: "Portal de Controle de Parceiros da Oobj construído em AngularJS",
            en: "Oobj’s Partners Control portal built in AngularJS"
        },
        portfolioContent4: {
            pt_br: "Portal de Conhecimento da Oobj com mais de 2 milhões de acessos que reúne artigos sobre Documentos Fiscais adaptado de um framework em PHP",
            en: "Oobj’s Knowledge Base adapted from a PHP framework with over 2 million hits containing articles related to invoices and tax documents"
        },
        portfolioContentButton1: {
            pt_br: "Ver mais",
            en: "See More"
        },
        portfolioContentButton2: {
            pt_br: "Ir ao site",
            en: "Go to site"
        },
        studyCourse: {
            pt_br: "em Ci\xEAncia da Computa\xE7\xE3o",
            en: "in Computer Science"
        },
        studyLevel1: {
            pt_br: "Mestrado",
            en: "Master's Degree"
        },
        studyTime1: {
            pt_br: "de Mar\xE7o de 2017 at\xE9 atualmente",
            en: "March 2017 - Present"
        },
        studyLevel1Desc: {
            pt_br: "Linha de pesquisa: Engenharia de software, Banco de dados e Inform\xE1tica e educa\xE7\xE3o." + "<br>" +
            "Projeto na área de Web Semântica relacionado a Ontologias e Privacidade em IoT",
            en: "Field of study: Software engineering, Database and Information Technology and Education." + "<br>" +
            "Research in: Web Semantics regarding Ontologies and Privacy in IoT (Internet of Things)"
        },
        studyLevel2: {
            pt_br: "Bacharelado",
            en: "Bachelor's Degree"
        },
        studyTime2: {
            pt_br: "de Mar\xE7o de 2009 at\xE9 Mar\xE7o de 2013 (4 anos)",
            en: "March 2009 - March 2013 (4 years)"
        },
        studyLevel2Desc: {
            pt_br: "Participação no Programa Institucional de Bolsas de Iniciação Científica (PIBIC) pela UFG concedido pelo CNPq de 2011 a 2012. Monitoria da disciplina Programação Orientada a Objetos pela UFG em 2010.",
            en: "Participation in Institutional Program for Scientific Initiation Scholarships (PIBIC) by UFG in a year (August 2011 - July 2012). Teacher's assistant in Object Oriented Programming by UFG in 2010."
        },
        studyLevel3: {
            pt_br: "Ensino M\xE9dio",
            en: "High School"
        },
        studyTime3: {
            pt_br: "de Janeiro de 2006 at\xE9 Dezembro de 2008 (3 anos)",
            en: "January 2006 - December 2008 (3 years)"
        },
        language1: {
            pt_br: "Portugu\xEAs brasileiro",
            en: "Portuguese"
        },
        languageLevel1: {
            pt_br: "Nativo",
            en: "Native proficiency"
        },
        language2: {
            pt_br: "Ingl\xEAs",
            en: "English"
        },
        languageLevel2: {
            pt_br: "Avan\xE7ado",
            en: "Full professional proficiency"
        },
        languageLevel3: {
            pt_br: "Inicial",
            en: "Elementary proficiency"
        },
        fillForm: {
            pt_br: "ou preencha o formul\xE1rio:",
            en: "or fill out the form:"
        },
        formField1: {
            pt_br: "Nome",
            en: "Name"
        },
        formFieldPh1: {
            pt_br: "Seu nome aqui",
            en: "Your name here"
        },
        formField2: {
            pt_br: "Email",
            en: "Email"
        },
        formField3: {
            pt_br: "Mensagem",
            en: "Message"
        },
        formButton1: {
            pt_br: "Enviar",
            en: "Send"
        },
        formButton2: {
            pt_br: "Limpar",
            en: "Erase"
        },
        back: {
            pt_br: "Voltar",
            en: "Back"
        },
        all: {
            pt_br: "Ver todos",
            en: "See All"
        }
    };

    var _t = $('body').translate({lang: "pt_br", t: t});
    var str = _t.g("translate");

    // Set language based on the location
    $.getJSON('http://api.ipstack.com/check?access_key=8ea9e59326639080022b0cb43cb9d93d', function (result) {
        var country = result.country_code;
        if (country !== 'BR') {
            var lang = 'en';
            _t.lang(lang);

            var newLang = languages[(languages.indexOf(lang) + 1) % languages.length];
            $('.lang-selector').attr("src", "img/" + newLang + ".png")
                .attr("data-value", newLang);
        }
    });

    // Change the language
    $(".lang-selector")
        .hover(function (ev) {
            $(".lang-selector-label").show();
        }, function (ev) {
            $(".lang-selector-label").hide();
        })
        .click(function (ev) {
            var lang = $(this).attr("data-value");
            _t.lang(lang);

            var newLang = languages[(languages.indexOf(lang) + 1) % languages.length];
            var newSrc = $(this).attr("src").split("/");
            newSrc.pop();

            $(this).attr("src", newSrc.join("/") + "/" + newLang + ".png");
            $(this).attr("data-value", newLang);

            ev.preventDefault();
        });


});