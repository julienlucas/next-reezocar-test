import Image from 'next/image'
import Link from 'next/link'
import { SectionCComp } from '../../styles/pages/home-style'

export default function SectionC() {
  return (
    <SectionCComp>
      <div className="container">
        <h2>Pourquoi choisir <span className="green">meilleure-reprise.com</span> ?</h2>
        <p>Acheter, vendre ou faire reprendre une voiture d'occasion n'a jamais été si simple !</p>

        <div className="row">
          <div className="col col-1">
            <div className="thumbnail">
              <Link href="/">
                <a>
                  <Image
                    src="/images/1.png"
                    width={380}
                    height={223}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="box">
              <p className="title">DEMARCHES ET INFORMATIONS</p>
              <h3><Link href="/"><a><span className="black">Les conseils d'un professionnel auto pour acheter ou vendre une voiture d'occasion</span></a></Link></h3>
              <p className="description">Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.</p>
              <Link href="/"><a><button className="btn btn-third btn-black">M'informer</button></a></Link>
            </div>
          </div>
          <div className="gutter"/>
          <div className="col col-2">
            <div className="thumbnail">
              <Link href="/">
                <a>
                  <Image
                    src="/images/2.png"
                    width={380}
                    height={223}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="box">
              <p className="title">VENDRE RAPIDEMENT</p>
              <h3><Link href="/"><a><span className="blue">Formulaire simplifié pour la vente ou la reprise de votre voiture d’occasion.</span></a></Link></h3>
              <p className="description">Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.</p>
              <Link href="/"><a><button className="btn btn-third btn-blue">Vendre</button></a></Link>
            </div>
          </div>
          <div className="gutter"/>
          <div className="col col-3">
            <div className="thumbnail">
              <Link href="/">
                <a>
                  <Image
                    src="/images/3.png"
                    width={380}
                    height={223}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="box">
              <p className="title">ACHETER  EN TOUTE SECURITE</p>
              <h3><Link href="/"><a><span className="green">Cherchez et trouvez l'annonce auto qui vous correspond partout en France</span></a></Link></h3>
              <p className="description">Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.</p>
              <Link href="/"><a><button className="btn btn-third btn-green">Acheter</button></a></Link>
            </div>
          </div>
        </div>
      </div>
    </SectionCComp>
  )
}
