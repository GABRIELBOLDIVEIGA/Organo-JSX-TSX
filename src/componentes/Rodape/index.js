import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <div className="tipo-img" id="fb" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <div className="tipo-img" id="tw" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <div className="tipo-img" id="ig" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <div className="tipo-img" id="logo-rodape" />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    );
};

export default Rodape;
