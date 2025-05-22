import React, { useEffect, useState } from 'react';

const App = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();

        if (term.includes('html')) {
            setActiveFilter('html');
            scrollTo('portfolyo');
        } else if (term.includes('visual')) {
            setActiveFilter('vp');
            scrollTo('portfolyo');
        } else if (term.includes('portfolyo') || term.includes('proje')) {
            scrollTo('portfolyo');
        } else if (term.includes('ben kimim') || term.includes('hakkımda')) {
            scrollTo('benkimim');
        }else if (term.includes('yabancı dil') || term.includes('dil')) {
            scrollTo('neler');

        } else {
            alert('Aranan içerik bulunamadı.');
        }
    };


    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
        
            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                scroll-behavior: smooth;
                font-family: 'Raleway', sans-serif;
            }

            body {
                background-color: #0A0F2C;
                color: #FFFFFF;
            }

            .container {
                display: flex;
            }

            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                width: 220px;
                height: 100vh;
                background-color: #333;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                text align: center;
                justify-content: center;
                gap: 20px;
                z-index: 1000;
                box-shadow: 0 2px 8px rgba(0,0,0,0.6);
            }

            .photo {
                width: 100px;
                height: 100px;
                background-color: #333;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
                font-weight: bold;
            }

            .name p {
                margin: 4px 0;
                font-weight: 600;
                text-align: center;
            }

            .navbar {
                position: sticky;
                top: 20px;
                margin: 0 auto 40px;
                background-color: #1D223A;
                display: flex;
                justify-content: center;
                padding: 12px 24px;
                gap: 20px;
                border-radius: 30px;
                width: fit-content;
                z-index: 1000;
                box-shadow: 0 2px 8px rgba(0,0,0,0.6);
            }

            .navbar button {
                background: transparent;
                border: 2px solid #F6A94C;
                color: #F6A94C;
                padding: 8px 14px;
                border-radius: 20px;
                cursor: pointer;
                font-size: 14px;
                transition: 0.3s;
            }

            .navbar button:hover {
                background-color: #F6A94C;
                color: #1D223A;
                font-weight: 600;
            }

            .content {
                margin-left: 220px;
                width: calc(100% - 220px);
            }

            .section {
                padding: 60px 40px;
                min-height: 100vh;
                background-color: #0A0F2C;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .section h2 {
                font-size: 28px;
                margin-bottom: 20px;
                color: #FFFFFF;
            }

            .search-container {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .search-box {
                display: flex;
                align-items: center;
                background-color: #1D223A;
                border: 2px solid #F6A94C;
                border-radius: 30px;
                padding: 8px 12px;
                width: 100%;
                max-width: 600px;
            }

            .search-box input {
                flex: 1;
                background: transparent;
                border: none;
                outline: none;
                color: #fff;
                font-size: 16px;
                padding: 10px;
            }

            .search-icon {
                font-size: 18px;
            }

            .start-button {
                margin-top: 20px;
                background-color: #F6A94C;
                color: #1D223A;
                border: none;
                padding: 12px 26px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .start-button:hover {
                background-color: #ffbd69;
            }


            #benkimim .profile-box h3 {
                font-size: 27px;
                margin-bottom: 20px;
                text-align: left;
            }

            #benkimim .profile-box p {
                font-size: 22px;
                margin-bottom: 15px;
                text-align: left;
            }
            

            .blink {
                animation: blink 3s infinite;
                color: #008000;
                font-size: 42px;
                font-weight: bold;
                font-family: 'Courier New', Courier, monospace;
                text-align: center;
                margin-bottom: 30px;
            }

            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }

            #neler .skills-section {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                gap: 20px;
            }
            


            #neler .skills-section .skill-category {
                width: 48%;
                margin-bottom: 0;
                display: flex;
                flex-direction: column;
            }

            #neler .skills-section .skill-category h3 {
                font-size: 24px;
                margin-bottom: 15px;
                color: #FFFFFF;
                text-align: left;
                border-bottom: 2px solid #F6A94C;
                padding-bottom: 10px;
            }

            #neler .skill-box {
                background-color: #1D223A;
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 20px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            #neler .skill-box.hidden {
                display: none;
            }

            #neler .skill-box h3 {
                font-size: 20px;
                margin-bottom: 10px;
                color: #FFFFFF;
                text-align: center;
            }

            #neler .progress-bar {
                background-color: #333;
                height: 10px;
                border-radius: 5px;
                position: relative;
                overflow: hidden;
                width: 100%;
            }

            #neler .progress-bar-fill {
                background-color: #F6A94C;
                height: 10px;
                border-radius: 5px;
                width: 0%;
                transition: width 0.5s ease;
            }

            #neler .skill-box p {
                font-size: 16px;
                color: #FFFFFF;
                text-align: center;
                margin-top: 10px;
            }

            .filter-buttons {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                gap: 10px;
            }

            .filter-buttons button {
                background-color: #1D223A;
                color: #F6A94C;
                border: 2px solid #F6A94C;
                padding: 6px 12px; /* Daha küçük padding */
                border-radius: 15px; /* Daha küçük border-radius */
                cursor: pointer;
                font-size: 12px; /* Daha küçük font-size */
                transition: all 0.3s ease;
            }

            .filter-buttons button:hover {
                background-color: #F6A94C;
                color: #1D223A;
                font-weight: 600;
            }

            .filter-buttons button.active {
                background-color: #F6A94C;
                color: #1D223A;
                font-weight: 600;
            }

            #neler .programing-skills-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 100%;
            }

            #neler .programing-skills-container .skill-box{
                width: 100%;
                margin-right: 0;
            }

            #neler .programing-skills-container .skill-box:nth-child(4){
                width: 100%;
            }

            #neler .language-skills-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 100%;
            }

            #neler .language-skills-container .skill-box{
                width: 100%;
                margin-right: 0;
            }

        `;
        document.head.appendChild(style);

    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const skills = [
                        { id: 'c-sharp-bar', level: '50%' },
                        { id: 'python-bar', level: '50%' },
                        { id: 'java-bar', level: '50%' },
                        { id: 'js-html-bar', level: '50%' },
                        { id: 'english-bar', level: '70%' }
                    ];
                    skills.forEach(skill => {
                        const bar = document.querySelector(`#${skill.id} .progress-bar-fill`);
                        if (bar) bar.style.width = skill.level;
                    });
                }
            });
        }, { threshold: 0.1 });

        const nelerSection = document.getElementById('neler');
        if (nelerSection) observer.observe(nelerSection);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Filtreleme mantığı
        const cSharpSkill = document.getElementById('c-sharp-bar');
        const pythonSkill = document.getElementById('python-bar');
        const javaSkill = document.getElementById('java-bar');
        const jsHtmlSkill = document.getElementById('js-html-bar');
        const englishSkill = document.getElementById('english-bar');

        const programingSkillsCategory = document.getElementById('programing-skills-category');
        const languageSkillsCategory = document.getElementById('language-skills-category');


        const allSkills = [cSharpSkill, pythonSkill, javaSkill, jsHtmlSkill, englishSkill];
        const programingSkills = [cSharpSkill, pythonSkill, javaSkill, jsHtmlSkill];
        const languageSkills = [englishSkill];

        allSkills.forEach(skill => {
            if (skill) skill.classList.add('hidden');
        });
        if(programingSkillsCategory) programingSkillsCategory.classList.remove('show')
        if(languageSkillsCategory) languageSkillsCategory.classList.remove('show')


        if (activeFilter === 'all') {
            allSkills.forEach(skill => {
                if (skill) skill.classList.remove('hidden');
            });
            if (programingSkillsCategory) {
                programingSkillsCategory.classList.add('show');
            }
            if (languageSkillsCategory) {
                languageSkillsCategory.classList.add('show');
            }

        } else if (activeFilter === 'programming') {
            programingSkills.forEach(skill => {
                if (skill) skill.classList.remove('hidden');
            });
            if (programingSkillsCategory) {
                programingSkillsCategory.classList.add('show');
            }
        } else if (activeFilter === 'language') {
            languageSkills.forEach(skill => {
                if (skill) skill.classList.remove('hidden');
            });
            if (languageSkillsCategory) {
                languageSkillsCategory.classList.add('show');
            }
        }
    }, [activeFilter]);

    return (
        <div className="container">
            <div className="sidebar" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '250px',
                height: '100vh',
                backgroundColor: '#1D223A',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#fff',
                boxSizing: 'border-box'
            }}>
                {/* Ortalanmış İçerik (fotoğraf, bilgiler, buton) */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    gap: '10px',
                }}>
                    <div className="photo" style={{
                        backgroundImage: 'url("/")',
                        width: '150px',
                        height: '150px',
                        backgroundColor: '#555',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                    }}>
                        Fotoğraf
                    </div>

                    <p style={{ margin: '0' }}><strong>Zeynep Güngören</strong></p>
                    <p style={{ margin: '0' }}>Balıkesir Üniversitesi</p>

                    <button
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                        onClick={() => alert('CV ekleme özelliği yakında!')}
                    >
                        CV Ekle
                    </button>
                </div>

                {/* En Alta Sabit Sosyal Medya Linkleri */}
                <div className="social-icons" style={{
                    position: 'absolute',
                    bottom: '20px',
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'center'
                }}>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
                        <i className="fab fa-x"></i>
                    </a>
                    <a href="https://github.com/zeynepgungoren" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px' }}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

    <div className="content">
                <nav className="navbar">
                    {['anasayfa', 'benkimim', 'neler', 'portfolyo', 'iletisim'].map((id) => (
                        <button key={id} onClick={() => scrollTo(id)}>
                            {id === 'benkimim' ? 'Ben Kimim' : id === 'neler' ? 'Neler Yapabilirim' : id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}
                </nav>

                <section id="anasayfa" className="section">
                    <h1 className="blink">"Hello World"</h1>
                    <div className="search-container">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Bir şeyler arayın..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearch(); // Enter ile çalışsın
                                }}
                            />
                            <span
                                role="img"
                                aria-label="search"
                                className="search-icon"
                                onClick={handleSearch} // simgeye tıklama ile de çalışsın
                                style={{ cursor: 'pointer' }}
                            >
                🔍
            </span>
                        </div>
                        <button className="start-button" onClick={() => scrollTo('benkimim')}>
                            Tanımaya Başla
                        </button>
                    </div>
                </section>


                <section id="benkimim" className="section" style={{ position: 'relative', textAlign: 'center', padding: '60px 0', scrollMarginTop: '80px' }}>
                    {/* Ana başlık ve arka plan yazısı aynı konumda */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        {/* Arka plan yazısı */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '80px',
                                fontStyle: 'italic',
                                color: 'rgba(169,177,200,0.06)',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                userSelect: 'none',
                                zIndex: 0,
                                fontFamily: 'Georgia',
                            }}
                        >
                            Ben Kimim
                        </div>
                        {/* Başlık */}
                        <h2
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                margin: 0,
                                paddingTop: '20px',
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: '#333',
                            }}
                        >
                            Ben Kimim
                        </h2>
                    </div>

                    {/* İçerik bölümü */}
                    <div
                        className="profile-box"
                        style={{
                            marginTop: '100px',
                            marginLeft: '100px',
                            fontFamily: 'Arial, sans-serif', // Yazı tipi
                            color: '#555', // Yazı rengi
                            textAlign: 'left', // Metin hizalama
                            fontSize: '100px', // Yazı büyüklüğü
                        }}
                    >
                        <h3 style={{ color: '#ffbd69' ,  fontSize: '30px',opacity:0.5}}>Merhaba, ben Zeynep!</h3>
                        <p>
                            Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümünde öğrenciyim ve
                            dördüncü dönemi (2. sınıf) tamamlamak üzereyim.
                            21 yaşındayım ve teknolojiye olan ilgimle sürekli kendimi geliştirmeye çalışıyorum.
                            Yazılım geliştirme, algoritmalar ve kullanıcı arayüzleri benim en çok ilgi duyduğum alanlar arasında yer alıyor.
                        </p>
                        <p>
                            Web teknolojileri, React, Node.js ve Python gibi modern araçlarla projeler geliştiriyorum.
                            Aynı zamanda problem çözme yeteneklerimi güçlendirmeye ve etkili ekip çalışması yapmaya önem veriyorum.
                            Sürekli öğrenme motivasyonumla yeni teknolojilere hızla adapte oluyor ve kendimi güncel tutuyorum.

                        </p>
                    </div>

                </section>

                <section
                    id="neler"
                    className="section"
                    style={{
                        position: 'relative',
                        textAlign: 'center',
                        padding: '80px 0',
                        scrollMarginTop: '100px',
                    }}
                >
                    {/* Başlık ve arka plan yazısı */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        {/* Arka plan yazısı */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '80px',
                                fontStyle: 'italic',
                                color: 'rgba(169,177,200,0.06)',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                userSelect: 'none',
                                zIndex: 0,
                                fontFamily: 'Georgia',
                            }}
                        >
                            Neler Yapabilirim
                        </div>
                        {/* Başlık */}
                        <h2
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                margin: 0,
                                paddingTop: '20px',
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: '#333',
                            }}
                        >
                            Neler Yapabilirim
                        </h2>
                    </div>

                    {/* Filtre Butonları */}


                    <h3 style={{ marginTop: '50px', marginBottom: '15px', marginLeft:'-100px', color: '#555', maxWidth: '800px' }}>Genel</h3>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '20px' }}>
                        {/* Sol bölme */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>

                            {/* Birinci Div */}
                            <div style={{
                                width: '450px',
                                height: '180px',
                                backgroundColor: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '10px'
                            }}>
                                {/* Sol kare alan */}
                                <div
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        backgroundColor: '#555',
                                        backgroundImage: 'url("/c.png")', // <- Doğru kullanım
                                        backgroundSize: 'cover',          // Resmi kutuya göre ayarlar
                                        backgroundPosition: 'center',     // Ortalar
                                        backgroundRepeat: 'no-repeat',    // Tekrar etmez
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {/* İsteğe bağlı içerik */}
                                </div>
                                {/* Sağ içerik alanı */}
                                <div style={{ flex: 1 }}>
                                    <p style={{ color: 'beige', fontSize: '13px', fontFamily: 'Arial, sans-serif', textAlign: 'left', opacity: 0.5 }}>
                                        Yazılıma büyük bir ilgi duyuyorum ve farklı programlama dillerinde projeler
                                        geliştirerek kendimi sürekli geliştiriyorum. C#, Java ve Python gibi dillerde deneyim sahibiyim.
                                        Problem çözme becerilerimi kodlama sürecinde etkin bir şekilde kullanırım.
                                        Öğrenmeye açık yapım sayesinde yeni teknolojilere kolayca uyum sağlayabiliyorum.
                                    </p>
                                </div>

                            </div>



                            {/* İkinci Div */}
                            <div style={{
                                width: '450px',
                                height: '180px',
                                backgroundColor: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '10px'
                            }}>
                                {/* Sol kare alan */}
                                <div
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        backgroundColor: '#555',
                                        backgroundImage: 'url("/d.png")', // <- Doğru kullanım
                                        backgroundSize: 'cover',          // Resmi kutuya göre ayarlar
                                        backgroundPosition: 'center',     // Ortalar
                                        backgroundRepeat: 'no-repeat',    // Tekrar etmez
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {/* İsteğe bağlı içerik */}
                                </div>


                                {/* Sağ içerik alanı */}
                                <div style={{ flex: 1 }}>
                                    <p style={{ color: 'beige', fontSize: '13px', fontFamily: 'Arial, sans-serif', textAlign: 'left',  opacity: 0.5 }}>
                                        HTML ve CSS kullanarak modern, kullanıcı dostu web arayüzleri tasarlamaktan keyif alıyorum.
                                        Web tasarımında görsel uyum ve kullanıcı deneyimine önem veririm.
                                        Tasarladığım sitelerin hem estetik hem de işlevsel olmasına özen gösteririm.
                                        Sürekli yeni tasarım trendlerini takip ederek kendimi geliştirmeye devam ediyorum.
                                    </p>
                                </div>
                            </div>

                            {/* Üçüncü Div */}
                            <div style={{
                                width: '450px',
                                height: '180px',
                                backgroundColor: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '10px'
                            }}>
                                {/* Sol kare alan */}
                                <div
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        backgroundColor: '#555',
                                        backgroundImage: 'url("/b.png")', // <- Doğru kullanım
                                        backgroundSize: 'cover',          // Resmi kutuya göre ayarlar
                                        backgroundPosition: 'center',     // Ortalar
                                        backgroundRepeat: 'no-repeat',    // Tekrar etmez
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {/* İsteğe bağlı içerik */}
                                </div>


                                {/* Sağ içerik alanı */}
                                <div style={{ flex: 1 }}>

                                    <p style={{ color: 'beige', fontSize: '13px', fontFamily: 'Arial, sans-serif', textAlign: 'left', opacity: 0.5 }}>
                                        Takım çalışmasında uyumlu bir şekilde hareket etmeyi ve ortak hedefler doğrultusunda
                                        katkı sağlamayı severim. İyi bir dinleyici olup fikir alışverişine açık davranırım.
                                        Ekip içinde sorumluluk almaktan çekinmem ve gerektiğinde destek olmayı görev bilirim.
                                        İş birliği ve uyum sayesinde daha güçlü sonuçlar elde edildiğine inanırım.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sağ bölme - Programlama Dilleri ve içerikleri */}
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                width: '50%',
                                justifyContent: 'flex-start', // veya 'center' isteğe göre
                                alignItems: 'flex-start',
                            }}
                        >
                            {/* Programlama Dilleri başlığı, hizalamayı sağlamak için margin ve align ayarını düzenle */}
                            <h4 style={{ width: '100%', marginTop: '-35px', marginBottom: '15px', marginLeft: '0px', color: '#555', fontWeight: 'bold' }}>Programlama Dilleri</h4>

                            {/* Proje 1 */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#333',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* Başlık */}
                                <h4 style={{ color: '#fff', margin: '0 0 10px' }}>C#</h4>

                                {/* Progress Bar */}
                                <div style={{ backgroundColor: '#555', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
                                    <div
                                        style={{
                                            height: '100%',
                                            width: '50%', // Orta seviyede ilerleme
                                            backgroundColor: '#007acc',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Proje 2 */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#333',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* Başlık */}
                                <h4 style={{ color: '#fff', margin: '0 0 10px' }}>Python</h4>
                                {/* C# Başlığı */}

                                {/* Progress Bar */}
                                <div style={{ backgroundColor: '#555', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
                                    <div
                                        style={{
                                            height: '100%',
                                            width: '50%', // Orta seviyede ilerleme
                                            backgroundColor: '#007acc',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Proje 3 */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#333',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* Başlık */}
                                <h4 style={{ color: '#fff', margin: '0 0 10px' }}>Java</h4>
                                {/* C# Başlığı */}

                                {/* Progress Bar */}
                                <div style={{ backgroundColor: '#555', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
                                    <div
                                        style={{
                                            height: '100%',
                                            width: '50%', // Orta seviyede ilerleme
                                            backgroundColor: '#007acc',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#333',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                {/* Başlık */}
                                <h4 style={{ color: '#fff', margin: '0 0 10px' }}>javaScript/html</h4>
                                {/* C# Başlığı */}

                                {/* Progress Bar */}
                                <div style={{ backgroundColor: '#555', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
                                    <div
                                        style={{
                                            height: '100%',
                                            width: '50%', // Orta seviyede ilerleme
                                            backgroundColor: '#007acc',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Yabancı Diller başlığı, hizalamayı sağlamak için margin ve genişliği ayarla */}
                            <h4 style={{ width: '100%', marginTop: '10px', marginBottom: '30px', marginLeft: '0px', color: '#555' }}>Yabancı Diller</h4>

                            {/* Yabancı Diller içerikleri */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '90px',
                                    backgroundColor: '#333',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                    marginTop:'-30px',
                                }}
                            >
                                {/* Başlık */}
                                <h4 style={{ color: '#fff', margin: '0 0 10px' }}>İngilizce (B2)</h4>


                                {/* Progress Bar */}
                                <div style={{ backgroundColor: '#555', borderRadius: '4px', height: '10px', width: '100%', overflow: 'hidden' }}>
                                    <div
                                        style={{
                                            height: '100%',
                                            width: '70%', // Orta seviyede ilerleme
                                            backgroundColor: '#007acc',
                                            transition: 'width 0.5s ease',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section
                    id="portfolyo"
                    className="section"
                    style={{
                        position: 'relative',
                        textAlign: 'center',
                        padding: '60px 0',
                        scrollMarginTop: '80px',
                    }}
                >
                    {/* Başlık */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '80px',
                                fontStyle: 'italic',
                                color: 'rgba(169,177,200,0.06)',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                userSelect: 'none',
                                zIndex: 0,
                                fontFamily: 'Georgia',
                            }}
                        >
                            Portfolyo
                        </div>
                        <h2
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                margin: 0,
                                paddingTop: '20px',
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: '#333',
                            }}
                        >
                            Portfolyo
                        </h2>
                    </div>

                    {/* Filtre Butonları */}
                    <div
                        className="filter-buttons"
                        style={{
                            marginTop: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>
                            Tümü
                        </button>
                        <button className={activeFilter === 'html' ? 'active' : ''} onClick={() => setActiveFilter('html')}>
                            Html
                        </button>
                        <button className={activeFilter === 'vp' ? 'active' : ''} onClick={() => setActiveFilter('vp')}>
                            Visual Programming
                        </button>
                    </div>

                    {/* İçerik */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '20px',
                            marginTop: '40px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {/* Tümü seçiliyse: klasik görünüm */}
                        {activeFilter === 'all' && (
                            <>
                                {/* HTML Kutusu */}
                                <div
                                    style={{
                                        width: '500px',
                                        height: '500px',
                                        backgroundColor: '#444',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundImage:'url("/h.png")',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    onClick={() => window.open('https://github.com/zeynepgungoren/html/', '_blank')}
                                >

                                </div>

                                {/* Visual Programming Projeleri */}
                                {/* Visual Programming Projeleri */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                        width: '50%',
                                        maxWidth: '500px',
                                        justifyContent: 'flex-start',
                                        opacity: 0.5,
                                    }}
                                >
                                    {[
                                        {
                                            title: 'Visual Programming Project',
                                            link: 'https://github.com/zeynepgungoren/visualProgramming-wordPad.ui/',
                                        },
                                        {
                                            title: 'Visual Programming Project ',
                                            link: 'https://github.com/zeynepgungoren/viualProgramming-soruBankasi/',
                                        },
                                        {
                                            title: 'Visual Programming Project',
                                            link: 'https://github.com/zeynepgungoren/visualProgramming-exmp/',
                                        },
                                    ].map((project, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                height: '153px',
                                                backgroundColor: '#444',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                padding: '10px',
                                                boxSizing: 'border-box',
                                                cursor: 'pointer',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                transition: 'all 0.3s ease',
                                                fontWeight: 'bold',
                                                fontSize: '20px',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <h4
                                                style={{
                                                    color: 'beige',
                                                    margin: '55px',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {project.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}

                        {/* Html seçiliyse: HTML solda, yazı alanı sağda */}
                        {activeFilter === 'html' && (
                            <>
                                {/* HTML Projesi - Solda */}
                                <div
                                    style={{
                                        width: '500px',
                                        height: '500px',
                                        backgroundColor: '#444',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundImage:'url("/h.png")',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    onClick={() => window.open('https://github.com/zeynepgungoren/html/', '_blank')}
                                >

                                </div>

                                {/* Yazı Alanı - Sağda */}
                                <div
                                    style={{
                                        marginTop:'110px',
                                        width: '40%',
                                        minWidth: '100px',
                                        height: '200px',
                                        backgroundColor: '#0A0F2C',
                                        border: '1px',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        boxSizing: 'border-box',
                                        textAlign: 'center',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.6',
                                            color: '#ffbd69',
                                            margin: '0',
                                            padding: '10px 0',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign:'justify',
                                            opacity: 0.5,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Bu proje, otel rezervasyonu yapmayı kolaylaştıran basit ve kullanıcı dostu bir web sitesidir.
                                        HTML kullanılarak tasarlanmış olup, temel rezervasyon işlemlerini hızlı ve pratik bir şekilde gerçekleştirmeyi
                                        amaçlamaktadır.
                                        Kullanıcılar, sezgisel arayüz sayesinde kolayca oda seçeneklerini görüntüleyip rezervasyon yapabilirler.
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '1.6',
                                            color: '#f0f0f0',
                                            margin: '0',
                                            padding: '27px 0',
                                            fontFamily: 'Arial, sans-serif',
                                            textAlign:'center',
                                        }}
                                    >

                                    </p>
                                </div>
                            </>
                        )}

                        {/* Visual Programming seçiliyse: Not alanı solda, kutular sağda */}
                        {activeFilter === 'vp' && (
                            <>
                                {/* Notlar - Solda */}
                                <div
                                    style={{
                                        width: '40%',
                                        minWidth: '300px',
                                        height: '500px',
                                        backgroundColor: '#0A0F2C',
                                        border: '1px',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        boxSizing: 'border-box',
                                        textAlign: 'left',


                                    }}

                                >
                                    <h2 style={{color: '#ffbd69', fontFamily: 'Arial, sans-serif', fontSize: '15px', marginBottom: '25px', textAlign: 'end',paddingTop:'15px',opacity:0.5}}>
                                        Bu proje, Qt Designer kullanılarak geliştirilmiş, temel metin düzenleme özelliklerine sahip bir
                                        WordPad benzeri uygulamadır. Kullanıcı dostu arayüzü sayesinde metin yazma,
                                        düzenleme, kaydetme ve açma işlemleri kolaylıkla yapılabilir.
                                        Proje, PyQt5 ile entegre edilerek güçlü ve esnek bir masaüstü metin editörü deneyimi sunar.
                                    </h2>

                                    <h4 style={{color: '#ffbd69', fontFamily: 'Arial, sans-serif', fontSize: '15px', marginBottom: '25px', textAlign: 'end',paddingTop:'40px',opacity:0.5}}>
                                        Bu proje, Qt Designer ile tasarlanmış kullanıcı dostu bir soru bankası uygulamasıdır.
                                        Soru verileri Excel dosyalarında saklanmakta ve PyQt6 kütüphanesi kullanılarak
                                        Python ile güçlü ve esnek bir masaüstü uygulaması olarak geliştirilmiştir.
                                        Kullanıcılar, soruları kolayca görüntüleyebilir, ekleyebilir ve düzenleyebilir.
                                        Proje, hem görsel tasarım hem de veri yönetimi açısından pratik bir çözüm sunmaktadır.
                                    </h4>

                                    <h6 style={{color: '#ffbd69', fontFamily: 'Arial, sans-serif', fontSize: '15px', marginBottom: '25px', textAlign: 'end',paddingTop:'40px',opacity:0.5}}>
                                        Bu proje, Qt Designer kullanılarak geliştirilmiş, rezervasyon işlemlerini kolaylaştıran bir masaüstü uygulamasıdır.
                                        Kullanıcı dostu arayüzü sayesinde rezervasyon ekleme, görüntüleme ve yönetme işlemleri pratik bir şekilde yapılabilir. Veriler, SQL veritabanında güvenli ve düzenli bir şekilde saklanmaktadır.

                                    </h6>


                                </div>


                                {/* VP Projeleri - Sağda */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                        width: '50%',
                                        maxWidth: '500px',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    {[
                                        {
                                            title: 'Visual Programming Project',
                                            link: 'https://github.com/zeynepgungoren/visualProgramming-wordPad.ui/',
                                        },
                                        {
                                            title: 'Visual Programming Project ',
                                            link: 'https://github.com/zeynepgungoren/viualProgramming-soruBankasi/',
                                        },
                                        {
                                            title: 'Visual Programming Project',
                                            link: 'https://github.com/zeynepgungoren/visualProgramming-exmp/',
                                        },
                                    ].map((project, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                height: '153px',
                                                backgroundColor: '#444',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                padding: '10px',
                                                boxSizing: 'border-box',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                opacity: 0.5,
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            <h4
                                                style={{
                                                    color: 'beige',
                                                    margin: '55px',
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px',
                                                }}
                                            >
                                                {project.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}
                    </div>
                </section>



                <section
                    id="iletisim"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        backgroundImage: 'url("/iletisim2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '40px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '16px',
                            padding: '40px',
                            maxWidth: '900px',
                            width: '100%',
                            color: '#fff',
                            gap: '40px'
                        }}
                    >
                        {/* Sol taraf: Form */}
                        <div style={{ flex: '1 1 300px', minWidth: '260px' }}>
                            <h2 style={{ marginBottom: '20px' }}>İletişim</h2>
                            <form
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                }}
                            >
                                <div>
                                    <label>İsim:</label>
                                    <input
                                        type="text"
                                        name="isim"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            marginTop: '5px',
                                            borderRadius: '6px',
                                            border: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Mail:</label>
                                    <input
                                        type="email"
                                        name="mail"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            marginTop: '5px',
                                            borderRadius: '6px',
                                            border: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Mesaj:</label>
                                    <textarea
                                        name="mesaj"
                                        rows="4"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            marginTop: '5px',
                                            borderRadius: '6px',
                                            border: 'none',
                                            resize: 'vertical'
                                        }}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '12px',
                                        width: '100%',
                                        border: 'none',
                                        borderRadius: '6px',
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Gönder
                                </button>
                            </form>
                        </div>

                        {/* Sağ taraf: Sabit bilgiler */}
                        <div
                            style={{
                                flex: '1 1 300px',
                                minWidth: '260px',
                                textAlign: 'center',
                                paddingTop: '30px'
                            }}
                        >
                            <h3>Bana Ulaşın</h3>
                            <div style={{ marginTop: '20px' }}>
                                <h4>Mail Adresleri</h4>
                                <p>202313709046@ogr.balikesir.edu.tr</p>
                                <p>zzeynepgungoren@gmail.com</p>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <h4>Telefon Numarası</h4>
                                <p>+90 535 875 2907</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default App;
