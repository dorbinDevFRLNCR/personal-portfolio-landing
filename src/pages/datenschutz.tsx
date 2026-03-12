// app/datenschutz/page.tsx
import Header from '../components/layout/header/header'
import Footer from '../components/layout/footer/footer'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'

function DatenschutzPage() {
  return (
    <>
      <Helmet>
        <title>Kyrylo Pavlov | Datenschutzerklärung</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="container text-muted mx-auto px-4 py-12 max-w-4xl prose prose-slate prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:underline">
        <div className="privacy-policy">
          <h1>Datenschutzerklärung</h1>

          <h2 id="m716">Präambel</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten
            Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu
            welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für
            alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
            Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen
            Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer
            Social-Media-Profile.
          </p>

          <p>Stand: 11. März 2026</p>

          <h2>Inhaltsübersicht</h2>
          <ul>
            <li>
              <a href="#m716">Präambel</a>
            </li>
            <li>
              <a href="#m3">Verantwortlicher</a>
            </li>
            <li>
              <a href="#mOverview">Übersicht der Verarbeitungen</a>
            </li>
            <li>
              <a href="#m2427">Maßgebliche Rechtsgrundlagen</a>
            </li>
            <li>
              <a href="#m27">Sicherheitsmaßnahmen</a>
            </li>
            <li>
              <a href="#m12">Datenspeicherung und Löschung</a>
            </li>
            <li>
              <a href="#m10">Rechte der betroffenen Personen</a>
            </li>
            <li>
              <a href="#m225">Bereitstellung des Onlineangebotes</a>
            </li>
          </ul>

          <h2 id="m3">Verantwortlicher</h2>
          <p>
            {import.meta.env.VITE_NAME_SURNAME}
            <br />
            {import.meta.env.VITE_ADRESS}
            <br />
            {import.meta.env.VITE_CITY}
          </p>

          <p>
            E-Mail:{' '}
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a>
          </p>

          <p>
            Impressum:{' '}
            <Link className="underline" to="/impressum">
              Impressum
            </Link>
          </p>

          <h2 id="mOverview">Übersicht der Verarbeitungen</h2>

          <h3>Arten der verarbeiteten Daten</h3>
          <ul>
            <li>Nutzungsdaten</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten</li>
            <li>Protokolldaten</li>
          </ul>

          <h3>Kategorien betroffener Personen</h3>
          <ul>
            <li>Nutzer</li>
          </ul>

          <h3>Zwecke der Verarbeitung</h3>
          <ul>
            <li>Sicherheitsmaßnahmen</li>
            <li>Bereitstellung unseres Onlineangebotes</li>
            <li>Informationstechnische Infrastruktur</li>
          </ul>

          <h2 id="m2427">Maßgebliche Rechtsgrundlagen</h2>

          <p>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis
            wir personenbezogene Daten verarbeiten.
          </p>

          <ul>
            <li>
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Verarbeitung
              zur Wahrung berechtigter Interessen des Verantwortlichen, sofern nicht die Interessen
              oder Grundrechte der betroffenen Person überwiegen.
            </li>
          </ul>

          <h2 id="m27">Sicherheitsmaßnahmen</h2>

          <p>
            Wir treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
            angemessenes Schutzniveau zu gewährleisten. Dazu gehören insbesondere Maßnahmen zur
            Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten.
          </p>

          <p>
            Unsere Website nutzt TLS/SSL-Verschlüsselung (HTTPS), um übertragene Daten zu schützen.
          </p>
          {''}
          <h2 id="m12">Allgemeine Informationen zur Datenspeicherung</h2>

          <p>
            Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <ul>
            <li>10 Jahre – Buchführungsunterlagen</li>
            <li>8 Jahre – Buchungsbelege</li>
            <li>6 Jahre – Geschäftsbriefe</li>
            <li>3 Jahre – mögliche Gewährleistungsansprüche</li>
          </ul>

          <h2 id="m10">Rechte der betroffenen Personen</h2>

          <ul>
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
          </ul>

          <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>

          <p>
            Wir verarbeiten Daten der Nutzer, um unser Onlineangebot bereitstellen zu können. Dazu
            gehört insbesondere die Verarbeitung der IP-Adresse, die notwendig ist, um Inhalte an
            den Browser des Nutzers zu übertragen.
          </p>

          <h3>Verarbeitete Daten</h3>
          <ul>
            <li>IP-Adresse</li>
            <li>Logfiles</li>
            <li>Geräteinformationen</li>
            <li>Nutzungsdaten</li>
          </ul>

          <p>
            Server-Logfiles werden aus Sicherheitsgründen gespeichert und nach spätestens 30 Tagen
            gelöscht.
          </p>

          <h2 id="m15">Änderung und Aktualisierung</h2>

          <p>
            Wir passen diese Datenschutzerklärung an, sobald Änderungen der Datenverarbeitung dies
            erforderlich machen.
          </p>

          <p className="text-sm mt-10">
            Erstellt mit dem Datenschutz-Generator von Dr. Thomas Schwenke.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DatenschutzPage
