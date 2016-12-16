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
        "brasileiro": {
            en: "brazillian"
        },
        "solteiro": {
            en: "single"
        },
        "Vers\xE3o Completa": {
            en: "Full Version"
        },
        "Curr\xEDculo em .pdf": {
            en: "Curriculum in .pdf"
        },
        "Vers\xE3o Compacta": {
            en: "Compact Version"
        },
        "Pontua\xE7\xE3o": {
            en: "Score"
        },
        summary: {
            pt_br: "Eu sou Lucas Balbino e procuro n\xE3o ser apenas criativo, mas tamb\xE9m inovador. Meu foco profissional \xE9 nas \xE1reas de gerenciamento de servi\xE7os de TI e em mapeamento de processos. Possuo um bom relacionamento interpessoal, r\xE1pido aprendizado, esp\xEDrito inovador e sede de conhecimento.",
            en: "I'm Lucas Balbino and I look for not to seem only criative, but really inovative. My main profissional goal is among IT management areas and in business process management. I demonstrate a fine interpersonal relationship, fast learning, inventive spirit and thirst of knowlegde."
        },
        successForm: {
            pt_br: "Mensagem enviada com sucesso!",
            en: "Message successfully sent!"
        },
        errorForm: {
            pt_br: "H\xE1 algum erro no formul\xE1rio.",
            en: "Please check your entries."
        },
        workJob1: {
            pt_br: "Analista de Neg\xF3cios",
            en: "IT Business Analyst"
        },
        workJobTime1: {
            pt_br: "de Novembro de 2014 at\xE9 atualmente",
            en: "November 2014 - Present"
        },
        workContent1: {
            pt_br: "Marketing Digital da empresa incluindo: planejamento de marketing, SEO, CPC, m\xEDdias sociais, estrat\xE9gias de gera\xE7\xE3o de conte\xFAdo (Endomarking), Email Marketing, Analytics, otimiza\xE7\xE3o de Landing Pages, Storytelling, dentre outros assuntos." + "<br>" +
            "Membro integrante da equipe de Gest\xE3o de Produto e respons\xE1vel pela comunica\xE7\xE3o entre a \xE1rea Comercial (neg\xF3cio) e a Opera\xE7\xE3o (Suporte t\xE9cnico e Desenvolvimento). Relacionamento direto com Clientes e gerenciamento de Canais. Cria\xE7\xE3o de material para Intelig\xEAncia de Mercado (an\xE1lise de concorrentes, aporte para prospec\xE7\xE3o).",
            en: "Full Stack Marketer, including: marketing planning, SEO, PPC, social media, content marketing strategy (Endomarketing), Email Marketing, Analytics, Landing Pages optimisation, Storytelling, among other matters." + "<br>" +
            "Product Management team's member and responsable for Sales (Business) and Operation (Dev and Customer Success) communication. Client and Partners-close relationship. Creation of Business Inteligence's content (competition analysis, contribution for prospecting)."
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
            pt_br: "No Projeto Oobj Indicadores transformamos indicadores de todos os departamentos da empresa (Suporte, Desenvolvimento, Integra\xE7\xE3o Cont\xEDnua, Comercial e Financeiro) de bancos de dados especificos em gr\xE1ficos e relat\xF3rios atualizados em tempo real." + "<br>" +
            "Esse projeto foi desenvolvido em AngularJS.",
            en: "In Oobj Indicadores Project we turned KPIs from all company departments (Customer Success, Development, Continuous Integration, Sales and Administration) of specific databases into graphs and reports updated in realtime." + "<br>" +
            "This project was developed in AngularJS."
        },
        portfolioContent2: {
            pt_br: "No Projeto Oobj Parceiros desenvolvemos um portal onde os parceiros, gerentes de conta e financeiro da empresa t\xEAm uma vis\xE3o abrangente sobre os contratos atuais, com estat\xEDsticas, relat\xF3rios e gera\xE7\xE3o de faturas.",
            en: "In Oobj Parceiros Project we developed a website where partners and company's account and financial managers have a comprehensive view on current contracts, with statistics, reports and invoice generation."
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
            pt_br: "de Mar\xE7o de 2015 at\xE9 Dezembro de 2015 (1 ano) - TRANCADO",
            en: "March 2015 - December 2015 (1 year) - Stop out period"
        },
        studyLevel1Desc: {
            pt_br: "Linha de pesquisa: Engenharia de software, Banco de dados e Inform\xE1tica e educa\xE7\xE3o.",
            en: "Research in: Software engineering, Database and Information Technology and Education."
        },
        studyLevel2: {
            pt_br: "Bacharelado",
            en: "Bachelor's Degree"
        },
        studyTime2: {
            pt_br: "de Mar\xE7o de 2009 at\xE9 Mar\xE7o de 2013 (4 anos)",
            en: "March 2009 - March 2013 (4 years)"
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
    $.getJSON('http://freegeoip.net/json/', function (result) {
        var country = result.country_code;
        if (country != 'BR') {
            var lang = 'en';
            _t.lang(lang);

            var newLang = languages[(languages.indexOf(lang) + 1) % languages.length];
            $('.lang-selector').attr("src", "img/" + newLang + ".png")
                .attr("data-value", newLang);
        }
    });

    // Change the language
    $(".lang-selector").click(function (ev) {
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