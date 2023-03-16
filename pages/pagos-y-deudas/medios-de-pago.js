import Head from "next/head";
import Header from "../../components/Header";

export default function mediosDePago() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Medios de Pago</title>
      </Head>

      <Header title="Medios de Pago" subtitle="" />
      <section className="medios-pagos">
        <div className="container">
          <h5>Pagá Online a través de "Pagos 360"</h5>
          <h6>Servicios Adheridos</h6>
          <div className="row medios-pagos-group">
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-pago-mis-cuentas.png"
                  alt="pago mis cuentas"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-link.png"
                  alt="link"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-debin.png"
                  alt="debin"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-interbanking.png"
                  alt="interbanking"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-visa.png"
                  alt="visa"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-visa-debito.png"
                  alt="visa debito"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-cordobesa.png"
                  alt="cordobesa"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-mastercard.png"
                  alt="mastercard"
                />
              </div>
            </div>
          </div>
          <h5>Pagos Presenciales</h5>
          <h6>Bancos Adheridos</h6>
          <div className="row medios-pagos-group">
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-bancor.png"
                  alt="banco de cordoba"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-credicoop.png"
                  alt="banco credicoop"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-banco-ciudad.png"
                  alt="banco ciudad"
                />
              </div>
            </div>
          </div>
          <h6>Ventanillas de Cobro</h6>
          <div className="row medios-pagos-group">
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-cobro-express.png"
                  alt="cobro express"
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo">
                <img
                  className="img-fluid"
                  src="../images/mdp-rapipago.png"
                  alt="rapipago"
                />
              </div>
            </div>
          </div>
          <h6>Dependencias Municipales</h6>
          <div className="row medios-pagos-group">
            <div className="col-6 col-md-2">
              <div className="logo text">EMOS</div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo text">EDECOM</div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo text">SEC. ECONOMÍA</div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo text">CEMENTERIO</div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo text">REGISTROS CIVILES</div>
            </div>
            <div className="col-6 col-md-2">
              <div className="logo text">CGM BANDA NORTE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
