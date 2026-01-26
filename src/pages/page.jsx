import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans text-black">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-32">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-black">Datenschutzerklärung</h1>

        <div className="space-y-8 text-base md:text-lg leading-relaxed text-center">
          
          {/* Use of Data Intro */}
          <section>
            <p className="mb-4">
              Diese Datenschutzerklärung enthält ausführliche Informationen darüber, was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website <a href="https://www.arshan.de" className="text-blue-600 hover:underline">www.arshan.de</a> besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich persönlich identifizieren können. Wir halten uns bei der Verarbeitung Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die Datenschutzgrundverordnung („DSGVO“), und legen großen Wert darauf, dass Ihr Besuch auf unserer Website absolut sicher ist.
            </p>
          </section>

          {/* Responsible Body */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Verantwortliche Stelle</h2>
            <p className="mb-4">
              Datenschutzrechtlich verantwortlich für die Erhebung und Verarbeitung von personenbezogenen Daten auf dieser Website ist:
            </p>
            <div className="text-center font-medium">
              <p>Name: Arshan UG</p>
              <br />
              <p>Straße, Hausnummer: Linkstraße 2/8 Etage Postleitzahl, Ort: 10785, Berlin</p>
              <p>Land: Deutschland</p>
              <p>E-Mail: <a href="mailto:info@arshan.de" className="text-blue-600 hover:underline">info@arshan.de</a></p>
            </div>
          </section>

          {/* Social Media */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Soziale Medien</h2>

            {/* Facebook */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-3">0.1 Facebook-Plugins (Like & Share-Button)</h3>
              <p className="mb-4">
                Auf unserer Website sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert („Facebook“). Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf unserer Website. Eine Übersicht über die Facebook Plugins finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
              </p>
              <p className="mb-4">
                Wenn Sie unsere Website besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Der Inhalt des Plugins wird von Facebook direkt an Ihren Browser übermittelt und in die Seite eingebunden. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Website besucht haben, auch wenn Sie kein Facebook-Profil besitzen oder nicht bei Facebook eingeloggt sind. Wenn Sie den Facebook „Like-Button“ anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Website-Betreiber keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten.
              </p>
              <p className="mb-4">
                Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus. Sie können das Laden des Facebook Plugins auch mit Add-Ons für Ihren Browser komplett verhindern.
              </p>
              <p>
                Informationen über den Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://de-de.facebook.com/privacy/explanation</a>.
              </p>
            </div>

            {/* Instagram */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-3">0.2 Instagram Plugin</h3>
              <p className="mb-4">
                Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA, („Instagram“) angeboten. Die Plugins sind mit einem Instagram-Logo beispielsweise in Form einer „Instagram-Kamera“ gekennzeichnet. Eine Übersicht über die Instagram Plugins und deren Aussehen finden Sie hier: <a href="http://blog.instagram.com/post/36222022872/introducing-instagram-badges" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://blog.instagram.com/post/36222022872/introducing-instagram-badges</a>
              </p>
              <p className="mb-4">
                Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Instagram her. Der Inhalt des Plugins wird von Instagram direkt an Ihren Browser übermittelt und in die Seite eingebunden. Durch diese Einbindung erhält Instagram die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein Instagram-Profil besitzen oder gerade nicht bei Instagram eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server von Instagram in die USA übermittelt und dort gespeichert.
              </p>
              <p className="mb-4">
                Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
              </p>
              <p className="mb-4">
                Wenn Sie nicht möchten, dass Instagram die über unsere Website gesammelten Daten unmittelbar Ihrem Instagram-Account zuordnet, müssen Sie sich vor Ihrem Besuch unserer Website bei Instagram ausloggen. Sie können das Laden der Instagram Plugins auch mit Add-Ons für Ihren Browser komplett verhindern, z.B. mit dem Skript-Blocker „NoScript“ (<a href="http://noscript.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://noscript.net/</a>).
              </p>
              <p>
                Informationen über den Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Instagram sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in der Datenschutzerklärung von Instagram unter: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://instagram.com/about/legal/privacy/</a>.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-3">0.3 LinkedIn Plugin</h3>
              <p className="mb-4">
                Unsere Website benutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA („LinkedIn“).
              </p>
              <p className="mb-4">
                Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Recommend-Button“ von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.
              </p>
              <p>
                Informationen über den Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch LinkedIn sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in der Datenschutzerklärung von LinkedIn unter: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.linkedin.com/legal/privacy-policy</a>.
              </p>
            </div>
          </section>

          {/* Google Maps */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Google Maps</h2>
            <p className="mb-4">
              Unsere Website nutzt über eine API (Application Programming Interface) den Kartendienst Google Maps der Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland („Google“).
            </p>
            <p className="mb-4">
              Um den Datenschutz auf unserer Website zu gewährleisten, ist Google Maps deaktiviert, wenn Sie unsere Website das erste Mal betreten. Eine direkte Verbindung zu den Servern von Google wird erst hergestellt, wenn Sie Google Maps selbstständig aktivieren (Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO). Auf diese Weise wird verhindert, dass Ihre Daten schon beim ersten Betreten unserer Website an Google übertragen werden.
            </p>
            <p className="mb-4">
              Nach der Aktivierung wird Google Maps Ihre IP-Adresse speichern. Diese wird anschließend in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat nach der Aktivierung von Google Maps keinen Einfluss auf diese Datenübertragung.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.google.de/intl/de/policies/privacy/</a>.
            </p>
          </section>

          {/* Kontaktformular */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Kontaktformular</h2>
            <p className="mb-4">
              Sofern Sie mit uns Kontakt per E-Mail oder über ein Kontaktformular aufnehmen, werden übermittelte Daten einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
            </p>
            <p className="mb-4">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p>
              Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.
            </p>
          </section>

          {/* Online-Zahlungen */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Online-Zahlungen</h2>
            <p>
              Wenn Sie in unserem Onlineshop Waren oder Leistungen bestellen, ist es für die Erfüllung des Vertrags erforderlich, dass Sie Ihre persönlichen Daten angeben, die für die Abwicklung Ihrer Bestellung notwendig sind. Die für die Vertragsabwicklung notwendigen Pflichtangaben sind gesondert markiert. In Abhängigkeit von der gewählten Zahlungsart werden die für die Zahlungsabwicklung erforderlichen Daten an die entsprechenden Zahlungsdienstleister weitergeleitet. Die Verarbeitung Ihrer Daten erfolgt auf der Rechtsgrundlage des Art. 6 Abs. 1 Satz 1 lit. b) DSGVO.
            </p>
          </section>

          {/* Datenverwendung und -weitergabe */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Datenverwendung und -weitergabe</h2>
            <p className="mb-4">
              Die personenbezogenen Daten, die Sie uns z.B. bei einer Bestellung oder per E-Mail mitteilen (z.B. Ihr Name und Ihre Adresse oder Ihre E-Mail-Adresse), werden wir weder an Dritte verkaufen noch anderweitig vermarkten. Ihre personenbezogenen Daten werden nur zur Korrespondenz mit Ihnen und nur für den Zweck verarbeitet, zu dem Sie uns die Daten zur Verfügung gestellt haben. Zur Abwicklung von Zahlungen geben wir Ihre Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut weiter.
            </p>
            <p className="mb-4">
              Die Verwendung von Daten, die bei Ihrem Besuch unserer Website automatisch erhoben werden, erfolgt nur zu den vorstehend genannten Zwecken. Eine anderweitige Verwendung der Daten findet nicht statt.
            </p>
            <p>
              Wir versichern, dass wir Ihre personenbezogenen Daten im Übrigen nicht an Dritte weitergeben, es sei denn, dass wir dazu gesetzlich verpflichtet wären oder Sie uns vorher Ihre Zustimmung gegeben haben.
            </p>
          </section>

          {/* SSL/TLS */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mb-4">
              Unsere Website benutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* Speicherdauer */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">§1 Speicherdauer</h2>
            <p>
              Personenbezogene Daten, die uns über unsere Website mitgeteilt worden sind, werden nur so lange gespeichert, bis der Zweck erfüllt ist, zu dem sie uns anvertraut wurden. Soweit handels- und steuerrechtliche Aufbewahrungsfristen zu beachten sind, kann die Speicherdauer zu bestimmten Daten bis zu 10 Jahre betragen.
            </p>
          </section>

          {/* Betroffenenrechte */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">§2 Betroffenenrechte</h2>
            <p className="mb-8">
              Hinsichtlich der Sie betreffenden personenbezogenen Daten haben als Betroffener der Datenverarbeitung nach Maßgabe der gesetzlichen Bestimmungen folgende Rechte gegenüber dem Verantwortlichen:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.1 Widerrufsrecht</h3>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sofern die Verarbeitung Ihrer Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Speicherung der Daten für Abrechnungs- und buchhalterische Zwecke bleibt von einem Widerruf nicht berührt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.2 Auskunftsrecht</h3>
                <p>
                  Sie haben das Recht, gemäß Art. 15 DSGVO von uns eine Bestätigung darüber zu verlangen, ob wir personenbezogene Daten verarbeiten, die Sie betreffen. Liegt eine solche Verarbeitung vor, haben Sie das Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.3 Recht auf Berichtigung</h3>
                <p>
                  Sie haben das Recht, gemäß Art. 16 DSGVO jederzeit unverzügliche Berichtigung Sie betreffender unrichtiger personenbezogener Daten und/oder die Vervollständigung Ihrer unvollständigen Daten zu verlangen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.4 Recht auf Löschung</h3>
                <p className="mb-4">
                  Sie haben das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern einer der folgenden Gründe zutrifft:
                </p>
                <ul className="list-none ml-6 space-y-2">
                  <li><strong>(a)</strong> Ihre personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                  <li><strong>(b)</strong> Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                  <li><strong>(c)</strong> Sie legen gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gemäß Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
                  <li><strong>(d)</strong> Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li><strong>(e)</strong> Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht des Mitgliedstaates erforderlich, dem wir unterliegen.</li>
                  <li><strong>(f)</strong> Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.</li>
                </ul>
                <p className="mt-4 mb-2">Dieses Recht besteht jedoch nicht, soweit die Verarbeitung erforderlich ist:</p>
                <ul className="list-none ml-6 space-y-2">
                  <li><strong>(a)</strong> zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                  <li><strong>(b)</strong> zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder des Mitgliedstaates, dem wir unterliegen, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die uns übertragen wurde;</li>
                  <li><strong>(c)</strong> aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;</li>
                  <li><strong>(d)</strong> für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Art. 89 Abs. 1 DSGVO, soweit das Betroffenenrecht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
                  <li><strong>(e)</strong> zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ul>
                <p className="mt-4">
                  Haben wir Ihre personenbezogenen Daten öffentlich gemacht und sind wir nach Vorstehendem zu deren Löschung verpflichtet, so treffen wir unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person von ihnen die Löschung aller Links zu Ihren personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.5 Recht auf Einschränkung der Verarbeitung</h3>
                <p className="mb-4">
                  Sie haben das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung (Sperrung) Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-none ml-6 space-y-2">
                  <li><strong>(a)</strong> Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>(b)</strong> Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li><strong>(c)</strong> Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>(d)</strong> Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p className="mt-4">
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der EU oder eines Mitgliedstaats verarbeitet werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.6 Recht auf Unterrichtung</h3>
                <p>
                  Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber uns geltend gemacht, sind wir verpflichtet, allen Empfängern, denen Ihre personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Ihnen steht gemäß Art. 19 DSGVO das Recht zu, nach Verlangen über diese Empfänger unterrichtet zu werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.7 Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden</h3>
                <p className="mb-4">
                  Sie haben das Recht, gemäß Art. 22 DSGVO nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.
                </p>
                <p className="mb-2">Dies gilt nicht, wenn die Entscheidung</p>
                <ul className="list-none ml-6 space-y-2">
                  <li><strong>(a)</strong> für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und uns erforderlich ist,</li>
                  <li><strong>(b)</strong> aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten oder</li>
                  <li><strong>(c)</strong> mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
                </ul>
                <p className="mt-4">
                  Allerdings dürfen die Entscheidungen in den in (a) bis (c) genannten Fällen nicht auf besonderen Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder lit. g gilt und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen wurden.
                </p>
                <p className="mt-4">
                  In den in (a) und (c) genannten Fällen treffen wir angemessene Maßnahmen, um Ihre Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.8 Recht auf Datenübertragbarkeit</h3>
                <p>
                  Sofern die Verarbeitung auf Ihrer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b DSGVO beruht und mithilfe automatisierter Verfahren erfolgt, haben Sie das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten und einem anderen Verantwortlichen zu übermitteln oder die Übermittlung an einen anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.9 Widerspruchsrecht</h3>
                <p className="mb-4">
                  Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessenabwägung nach Art. 6 Abs. 1 lit. f DSGVO stützen, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                </p>
                <p className="mb-4">
                  Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                </p>
                <p>
                  Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG - Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2">2.10 Beschwerderecht bei der zuständigen Aufsichtsbehörde gemäß Art. 77 DSGVO</h3>
                <p className="mb-4">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
                <div className="text-center font-medium mt-6">
                  <p>Die für uns zuständige Aufsichtsbehörde ist:</p>
                  <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                  <br />
                  <p>Friedrichstr. 219 10969 Berlin</p>
                  <br />
                  <p>Besuchereingang: Puttkamer Straße 16 - 18 (5. Etage)</p>
                  <br />
                  <p>Telefon: 030/138 89-0</p>
                  <p>E-Mail: <a href="mailto:mailbox@datenschutz-berlin.de" className="text-blue-600 hover:underline">mailbox@datenschutz-berlin.de</a> Internet: <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.datenschutz-berlin.de</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Gültigkeit und Änderung */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Gültigkeit und Änderung dieser Datenschutzerklärung</h2>
            <p className="mb-4">
              Diese Datenschutzerklärung gilt ab dem 10. Juni 2024. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern. Dies kann z.B. zur Einhaltung neuer Gesetzesbestimmungen oder zur Berücksichtigung der Änderungen unserer Website bzw. neuer Dienstleistungen auf unserer Website erforderlich sein. Es gilt die zum Zeitpunkt Ihres Besuchs abrufbare Fassung.
            </p>
            <p>
              Sollte diese Datenschutzerklärung geändert werden, beabsichtigen wir, Änderungen an unserer Datenschutzerklärung auf dieser Seite bekannt zu geben, sodass Sie umfassend darüber informiert sind, welche personenbezogenen Daten wir sammeln, wie wir sie verarbeiten und unter welchen Umständen sie weitergegeben werden können.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
