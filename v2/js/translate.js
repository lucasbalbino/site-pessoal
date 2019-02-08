$(function () {
    var languages = ['pt_br', 'en'];

    // Dictionary
    var t = {
        "Change to English": {
            en: "Mudar para Portugu\xEAs"
        },
        "Trabalho": {
            en: "Work"
        },
        study: {
            pt_br: "Estudo",
            en: "Study"
        },
        "Curr\xEDculo": {
            en: "R\xE9sum\xE9"
        },
        skills: {
            pt_br: "Compet\xEAncias",
            en: "Skills"
        },
        portfolio: {
            pt_br: "Portif\xF3lio",
            en: "Portfolio"
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
        "Pontua\xE7\xE3o": {
            en: "Score"
        },
        "Certifica\xE7\xF5es": {
            en: "Certifications"
        },
        summary: {
            pt_br: "Profissional de TI focado na <strong>Gestão de Produto</strong> com espírito não apenas <strong>criativo</strong>, mas <strong>inovador</strong>. Entre meus pontos fortes estão <strong>bom relacionamento interpessoal</strong>, <strong>rápido aprendizado</strong> e <strong>sede de conhecimento</strong>. Com mais de <strong>6 anos</strong> de experiência profissional, sigo evoluindo e aprendendo novas formas de integrar a <strong>Tecnologia</strong> com várias áreas: <strong>Desenvolvimento</strong>, <strong>Marketing</strong>, <strong>Comercial</strong> e <strong>Customer Success</strong>.",
            en: "IT Professional specialized on <strong>Product Ownership</strong> with a <strong>creative</strong> spirit and <strong>innovative</strong> behavior. I can list as strengths an impeccable <strong>interpersonal relationship</strong>, fast <strong>learning skills</strong> and thirst of <strong>knowledge</strong>. With over <strong>6 years</strong> of work experience, I keep evolving and learning new ways of integrating <strong>Technology</strong> to several areas: <strong>Development</strong>, <strong>Marketing</strong>, <strong>Sales</strong> and <strong>Customer Success</strong>."
        },
        successForm: {
            pt_br: "Mensagem enviada com sucesso!",
            en: "Message successfully sent!"
        },
        errorForm: {
            pt_br: "Há algum erro no formulário.",
            en: "Please check your entries."
        },
        workJob0: {
            pt_br: "Gerente de Produto",
            en: "Product Manager"
        },
        workJobTime0: {
            pt_br: "de Janeiro de 2017 até atualmente (mais de 2 anos)",
            en: "January 2017 - Present (over 2 years)"
        },
        workContent0: {
            pt_br: "<ul class='description'>" +
            "<li>Responsável pela Gestão de Produto da empresa e pela integração entre as áreas Comercial (negócio) e Operação (Suporte e Desenvolvimento)</li>" +
            "<li>Gerenciamento e acompanhamento do roadmap e do Portfólio</li>" +
            "<li>Criação de protótipos de interfaces (focadas em UI/UX), análise de requisitos, desenho de fluxos das soluções existentes e de novas funcionalidades</li>" +
            "<li>Integração e adequação de produtos de parceiros ao Portfólio da empresa</li>" +
            "<li>Aplicação de estratégias de Growth e ferramentas que auxiliem a alavancar os produtos</li>" +
            "<li>Comunicação sobre a evolução dos produtos</li>" +
            "<li>Documentação e treinamento à equipe sobre os produtos</li>" +
            "</ul>",
            en: "<ul class='description'>" +
            "<li>Responsible for the company’s Product Management and for Sales (Business) and Operation (Dev and Customer Success) communication</li>" +
            "<li>Roadmap and Portfolio’s monitoring and management</li>" +
            "<li>Interface prototype creation (focused on UI / UX), requirements analysis, flows drawing of existing solutions and new features</li>" +
            "<li>Integration and adaptation of partners' products to the company portfolio</li>" +
            "<li>Application of Growth strategies and tools to help boost products</li>" +
            "<li>Communication about the evolution of products</li>" +
            "<li>Documentation and training to the team about the products</li>" +
            "</ul>"
        },
        workJob1: {
            pt_br: "Analista de Negócios",
            en: "IT Business Analyst"
        },
        workJobTime1: {
            pt_br: "de Novembro de 2014 até Janeiro de 2017 (2 anos e 2 meses)",
            en: "November 2014 - January 2017 (2 years 2 months)"
        },
        workContent1: {
            pt_br: "<ul class='description'>" +
            "<li>Marketing Digital da empresa incluindo:" +
            "<ul>" +
            "<li>planejamento de estratégias para SEO</li>" +
            "<li>redes sociais (Facebook, Instagram, Twitter e Linkedin)</li>" +
            "<li>mídias pagas (AdWords, Facebook Ads e Linkedin Ads)</li>" +
            "<li>geração de conteúdo para o Blog e material rico (Inbound Marketing)</li>" +
            "<li>email marketing e cold email (Outbound Marketing)</li>" +
            "<li>endomarketing</li>" +
            "<li>Analytics</li>" +
            "<li>otimização de Landing Pages</li>" +
            "<li>Storytelling</li>" +
            "<li>dentre outros assuntos relacionados</li>" +
            "</ul>" +
            "</li>" +
            "<li>Relacionamento direto com Clientes e gerenciamento de Canais</li>" +
            "<li>Criação de material para Inteligência de Mercado:" +
            "<ul>" +
            "<li>análise de concorrentes</li>" +
            "<li>enriquecimento de listas</li>" +
            "<li>aporte para prospecção</li>" +
            "</ul></li>" +
            "</ul>",
            en: "<ul class='description'>" +
            "<li>Full Stack Marketer, including:" +
            "<ul>" +
            "<li>marketing planning for SEO and SEM</li>" +
            "<li>social media (Facebook, Instagram, Linkedin)</li>" +
            "<li>PPC (AdWords, Facebook Ads, Linkedin Ads)</li>" +
            "<li>content marketing strategy for blog posts (Inbound Marketing)</li>" +
            "<li>email marketing and cold email (Outbound Marketing)</li>" +
            "<li>endomarketing</li>" +
            "<li>Analytics</li>" +
            "<li>Landing Pages optimisation</li>" +
            "<li>Storytelling</li>" +
            "<li>among other related matters</li>" +
            "</ul>" +
            "</li>" +
            "<li>Client and Partners-close relationship</li>" +
            "<li>Creation of Business Intelligence content:" +
            "<ul>" +
            "<li>competition analysis</li>" +
            "<li>lists enrichment</li>" +
            "<li>contribution for prospecting.</li>" +
            "</ul>" +
            "</li>" +
            "</ul>"
        },
        workJob2: {
            pt_br: "Analista de Suporte",
            en: "Customer Service"
        },
        workJobTime2: {
            pt_br: "de Março de 2013 até Novembro de 2014 (1 ano e 9 meses)",
            en: "March 2013 - November 2014 (1 year 9 months)"
        },
        workContent2: {
            pt_br: "<ul class='description'>" +
            "<li>Realização de treinamentos para novos colaboradores e capacitação dos veteranos</li>" +
            "<li>Auditoria em chamados</li>" +
            "<li>Mapeamento de processos do departamento Suporte</li>" +
            "<li>Atendimento a Clientes por telefone, email e portal Web</li>" +
            "<li>Levantamento de estatísticas de desempenho mensal</li>" +
            "<li>Documentação das soluções</li>" +
            "</ul>",
            en: "<ul class='description'>" +
            "<li>Customer Success new employees training and veteran employees coaching</li>" +
            "<li>Customer Success attendance throught phone, email and website</li>" +
            "<li>Tickets auditing</li>" +
            "<li>Monthly KPI statistics analysis</li>" +
            "<li>Client-side and employee-side services documentation</li>" +
            "</ul>"
        },
        workJob3: {
            pt_br: "Analista de Processos",
            en: "IT Process Analyst"
        },
        workJobTime3: {
            pt_br: "de Novembro de 2012 até Fevereiro de 2013 (4 meses)",
            en: "November 2012 - February 2013 (4 months)"
        },
        workContent3: {
            pt_br: "Estágio não-obrigatório." + "<br>" +
            "<ul class='description'>" +
            "<li>Mapeamento de processos organizacionais da Coordenadoria de Registro de Diplomas</li>" +
            "<li>Melhoria do processo de aquisição de material da Universidade Federal de Goiás</li>" +
            "<li>entrevista para coleta de dados e auxílio na elaboração do novo índice de tipos documentais.</li>" +
            "</ul>",
            en: "Non-mandatory internship." + "<br>" +
            "<ul class='description'>" +
            "<li>University Degree Registration Coordination's organizational process mapping</li>" +
            "<li>Material acquisition process' improvement of the Federal University of Goiás</li>" +
            "<li>Interview for data collection and assistance in the elaboration of the new index of documentary types</li>" +
            "</ul>"
        },
        certificationTime1: {
            pt_br: "Outubro 2018 - Novembro 2020",
            en: "October 2018 - November 2020"
        },
        certificationTime2: {
            pt_br: "Janeiro 2019 - Fevereiro 2021",
            en: "January 2019 - February 2021"
        },
        certificationTime3: {
            pt_br: "Junho 2014",
            en: "June 2014"
        },
        education: {
            pt_br: "Estudo",
            en: "Formal Education"
        },
        studyCourse: {
            pt_br: "em Ciência da Computação",
            en: "in Computer Science"
        },
        studyLevel1: {
            pt_br: "Mestrado",
            en: "Master's Degree"
        },
        studyTime1: {
            pt_br: "de Março de 2017 até Julho de 2018 (Trancado)",
            en: "March 2017 - July 2018 (Stop out period)"
        },
        studyLevel1Desc: {
            pt_br: "Linha de pesquisa: Engenharia de software, Banco de dados e Inform\xE1tica e educa\xE7\xE3o." + "<br>" +
            "Projeto na área de Web Semântica relacionado a Ontologias e Privacidade em IoT" + "<br>" +
            "Artigo publicado:" + "<br>" +
            "<a target='blank' href='https://dl.acm.org/citation.cfm?id=3243086'>" +
            "A Lightweight Mobile Service for Context Representation through an IoT-oriented Ontology</a>",
            en: "Field of study: Software engineering, Database and Information Technology and Education." + "<br>" +
            "Research in: Web Semantics regarding Ontologies and Privacy in IoT (Internet of Things)" + "<br>" +
            "Published article:" + "<br>" +
            "<a target='blank' href='https://dl.acm.org/citation.cfm?id=3243086'>" +
            "A Lightweight Mobile Service for Context Representation through an IoT-oriented Ontology</a>"
        },
        studyLevel2: {
            pt_br: "Bacharelado",
            en: "Bachelor's Degree"
        },
        studyTime2: {
            pt_br: "de Março de 2009 até Março de 2013 (4 anos)",
            en: "March 2009 - March 2013 (4 years)"
        },
        studyLevel2Desc: {
            pt_br: "Participação no Programa Institucional de Bolsas de Iniciação Científica (PIBIC) pela UFG concedido pelo CNPq de 2011 a 2012." + "<br>" +
            "Trabalho final de curso e artigo do PIBIC: " +
            "<a target='blank' href='https://www.slideshare.net/slideshow/embed_code/key/BWtu4gACEcQUkB'>" +
            "Dynamic Loading of Contextual Map Services by R-OSGi</a>" + "<br>" +
            "Monitoria da disciplina Programação Orientada a Objetos pela UFG em 2010.",
            en: "Participation in Institutional Program for Scientific Initiation Scholarships (PIBIC) by UFG in a year (August 2011 - July 2012)." + "<br>" +
            "Undergraduate thesis and PIBIC's article report: " +
            "<a target='blank' href='https://www.slideshare.net/slideshow/embed_code/key/BWtu4gACEcQUkB'>" +
            "Dynamic Loading of Contextual Map Services by R-OSGi</a>" + "<br>" +
            "Teacher's assistant in Object Oriented Programming by UFG in 2010."
        },
        studyLevel3: {
            pt_br: "Ensino M\xE9dio",
            en: "High School"
        },
        studyTime3: {
            pt_br: "de Janeiro de 2006 at\xE9 Dezembro de 2008 (3 anos)",
            en: "January 2006 - December 2008 (3 years)"
        },
        credential: {
            pt_br: "Número da Credencial",
            en: "Credential ID"
        },
        certificate: {
            pt_br: "Comprovante do Certificado",
            en: "Certificate in PDF"
        },
        language1: {
            pt_br: "Português brasileiro",
            en: "Brazilian Portuguese"
        },
        languageLevel1: {
            pt_br: "Nativo",
            en: "Native proficiency"
        },
        language2: {
            pt_br: "Inglês",
            en: "English"
        },
        languageLevel2: {
            pt_br: "Avançado",
            en: "Full professional proficiency"
        },
        languageLevel3: {
            pt_br: "Inicial",
            en: "Elementary proficiency"
        },
        tools: {
            pt_br: "Experiência com estes softwares:",
            en: "Experience with these tools:"
        },
        technicalSkills: {
            pt_br: "Competências Técnicas",
            en: "Technical Skills"
        },
        seePortfolio: {
            pt_br: "Todo meu portifólio técnico está em",
            en: "See all my technical portfolio on"
        },
        portfolioScreenshots: {
            pt_br: "<strong>Telas</strong>",
            en: "<strong>Screenshots</strong>"
        },
        portfolioContent1: {
            pt_br: "<strong>Resumo</strong>: Portal de Gerenciamento e Acompanhamento Centralizado dos Indicadores de vários departamentos de uma empresa, integrando diversos bancos de dados e fontes de informação" + "<br><br>" +
            "<strong>Tecnologias Utilizadas</strong>: AngularJS (HTML 5, CSS 3, Javascript)" + "<br><br>",
            en: "<strong>Summary</strong>: KPI Management portal with centralized monitoring of the company’s department, integrating several databases and information sources" + "<br><br>" +
            "<strong>Frameworks</strong>: AngularJS (HTML 5, CSS 3, Javascript)" + "<br><br>"
        },
        portfolioContent2: {
            pt_br: "<strong>Resumo</strong>: Portal de Controle de Parceiros da Oobj construído em AngularJS" + "<br><br>" +
            "<strong>Tecnologias Utilizadas</strong>: AngularJS (HTML 5, CSS 3, Javascript)" + "<br><br>",
            en: "<strong>Summary</strong>: Oobj’s Partners Control portal built in AngularJS" + "<br><br>" +
            "<strong>Frameworks</strong>: AngularJS (HTML 5, CSS 3, Javascript)" + "<br><br>"
        },
        portfolioContent3: {
            pt_br: "<strong>Resumo</strong>: Portal de Conhecimento da Oobj com mais de 2 milhões de acessos que reúne artigos sobre Documentos Fiscais adaptado de um framework em PHP" + "<br><br>" +
            "<strong>Tecnologias Utilizadas</strong>: CMS (Sistema de Gestão de Conteúdo) desenvolvido em PHP" + "<br><br>",
            en: "<strong>Summary</strong>: Oobj’s Knowledge Base adapted from a PHP framework with over 2 million hits containing articles related to invoices and tax documents" + "<br><br>" +
            "<strong>Frameworks</strong>: CMS (Content Management System) delevoped using PHP" + "<br><br>"
        },
        portfolioContentButton1: {
            pt_br: "Ver mais",
            en: "See More"
        },
        portfolioContentButton2: {
            pt_br: "Ir ao site",
            en: "Go to site"
        },
        sendEmail: {
            pt_br: "Envie um email para:",
            en: "Send an email to:"
        },
        fillForm: {
            pt_br: "ou preencha o formulário:",
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