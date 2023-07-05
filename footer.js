class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

        <style>
        /*FOOTER*/
footer {
    max-width: 100%;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}



     /*FOOTER > OTHER LINKS*/

    footer > a {
        text-decoration: none; 
        font-size: 1em;
    }

    /* The Modal (background) */
    .modalImpressum {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
  
    /* Modal Content/Box */
    .modal-content-Impressum {
        background-color: var(--background-color);
        margin: 6% auto; /* 6% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
    
    /* The Close Button */
    .close {
        color: var(--default-font-color);
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
        opacity: 0.75;
        transition: 300ms;
        text-decoration: none;
        cursor: pointer;
    }

    .impressumBTN {
        display: flex;
        text-align: center;
        justify-content: center;
        color: var(--default-font-color);
        background-color: var(--background-color);
        padding: 0;
        outline: none;
        font-size: 1em;
        all: unset;
        cursor: pointer;
    }
        
        .modal-body h2 {
        font-size: 1.5rem;
        }
        
        .modal-body h3 {
        font-size: 1.3rem;
        }
        
        .adresse td {
        padding-right: 40px;
        }

        .modal-body h1 {
            padding: 0;
            margin: 1rem 0 0 0;
        }

        @media (max-width: 517px) {
            .modal-body > .datenHeading {
                font-size: 1.1em;
            }
        }
        @media (max-width: 414px) {
            .modal-body > .aenderungHeading {
                font-size: 1em;
            }
        }
    

        /*       MODAL DATENSCHUTZ        */

        .modalDatenschutz {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }
      
        /* Modal Content/Box */
        .modal-content-datenschutz {
            background-color: var(--background-color);
            margin: 6% auto; /* 6% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }
        
        /* The Close Button */
        .close2 {
            color: var(--default-font-color);
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        
        .close2:hover,
        .close2:focus {
            opacity: 0.75;
            transition: 300ms;
            text-decoration: none;
            cursor: pointer;
        }
    
        .datenschutzBTN {
            display: flex;
            text-align: center;
            justify-content: center;
            color: var(--default-font-color);
            background-color: var(--background-color);
            padding: 0;
            outline: none;
            font-size: 1em;
            all: unset;
            cursor: pointer;
        }
        </style>
        <!-----------------------------FOOTER START--------------------------------------->
        <footer> 
            
                <span class="copyright">©2023 INNOFM</span>
                |
                <!-----------------------------MODAL IMPRESSUM START--------------------------------------->
                <button id="modalBtn" class="impressumBTN">IMPRESSUM</button>

                <!-- The Modal -->
                <div id="myModal" class="modalImpressum">

                <!-- Modal content -->
                <div class="modal-content-Impressum">
                    <span class="close">&times;</span>
                    <div class="modal-body">
                        <h1>IMPRESSUM</h1><br>
                        <p>Pflichtangaben nach § 5 Telemediengesetz (TMG), § 55 Rundfunk-Staatsvertrag (RStV):</p>
                        <P><b>InnoFM Interview Podcast</b><br>
                        </P>
                        <p>
                            E-Mail: podcast@thomzik.de <br> 
                            Web: www.innofm.de</p>
                        <p> Verantwortlich im Sinne des Medienrechts: Markus Thomzik</p> 
                        <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        
                       
                        <p><b>Zusammenarbeit:</b><br>
                            Logo:  Anja Kalmann / <a href="https://www.kalmann-design.de/kalmann-persoenliches.html" target="_blank">www.kalmann-design.de</a><br> 
                            Foto: Lichtschacht / <a href="https://lichtschacht.com" target="_blank">www.lichtschacht.com</a><br>
                            Technische Umsetzung: Wim Thomzik /  <a href="https://www.linkedin.com/in/wim-thomzik-626b7420a/" target="_blank">www.linkedin.com/wim-thomzik</a></p>
        
        
                        <h4>Haftung für Inhalte</h4>
                        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                        
                        <h4>Haftung für Links</h4>
                        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                        
                        <h4>Urheberrecht</h4>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                                    
                </div>
                </div>
                </div>
                <!-----------------------------MODAL IMPRESSUM ENDE--------------------------------------->
                |
                <button id="modalBtn2" class="datenschutzBTN">DATENSCHUTZ</button>

                <div id="myModal2" class="modalDatenschutz">

                    <div class="modal-content-datenschutz">
                        <span class="close2">&times;</span>
                        <div class="modal-body">
                            <h1 class="datenHeading">Datenschutzerklärung</h1><br>
                            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
                            <p>Markus Thomzik
                            <br>podcast@thomzik.de</p>
                            <h2>Ihre Betroffenenrechte</h2>
                            <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
                            <ul>
                            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
                            </ul>
                            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                            <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
                            <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank" rel="noopener nofollow">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a>.</p>
                            <p></p><h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
                            <h3>Art und Zweck der Verarbeitung:</h3>
                            <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
                            <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
                            <ul>
                            <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                            <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                            <li>zur Optimierung unserer Website.</li>
                            </ul>
                            <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren. </p>
                            <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
                            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>
                            <h3>Empfänger:</h3>
                            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>
                            <p></p><h3>Drittlandtransfer:</h3>
                            <p>Die erhobenen Daten werden ggfs. in folgende Drittländer übertragen: </p>
                            <p>Nein</p>
                            <p></p><h3>Speicherdauer:</h3>
                            <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist. </p>
                            <p> Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine  Zuordnung  des aufrufenden Clients nicht mehr möglich ist.</p>
                            <p></p><h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                            <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen. </p>
                            <p></p><h2>Cookies</h2>
                            <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen. </p>
                            <p>Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
                            <ul>
                            <li><a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="nofollow noopener">Mozilla Firefox</a></li>
                            <li><a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="nofollow noopener">Internet Explorer</a></li>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="nofollow noopener">Google Chrome</a></li>
                            <li><a href="http://www.opera.com/de/help" target="_blank" rel="nofollow noopener">Opera</a></li>
                            <li><a href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE" target="_blank" rel="nofollow noopener">Safari</a></li>
                            </ul>
                            <h3>Speicherdauer und eingesetzte Cookies:</h3>
                            <p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
                            <p>Session-Cookies (werden beim schließen des Browsers gelöscht)</p>
                            <h2>Technisch notwendige Cookies </h2>
                            <h3>Art und Zweck der Verarbeitung: </h3>
                            <p>Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.</p>
                            <p>Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.</p>
                            <p>Für folgende Anwendungen benötigen wir Cookies:</p>
                            <p></p><h3>Rechtsgrundlage und berechtigtes Interesse: </h3>
                            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.</p>
                            <h3>Empfänger: </h3>
                            <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.</p>
                            <p></p><h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
                            <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.</p>
                            <h3>Widerspruch</h3>
                            <p>Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.</p>
                            <p></p><h2>SSL-Verschlüsselung</h2>
                            <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
                            <p></p><hr>
                            <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
                            <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
                            <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
                            <p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
                            <h3>Empfänger eines Widerspruchs</h3>
                            <p>Markus Thomzik
                            <br>podcast@thomzik.de
                            <hr>
                            <h2 class="aenderungHeading">Änderung unserer Datenschutzbestimmungen</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                            <h2 class="aenderungHeading">Fragen an den Datenschutzbeauftragten</h2>
                            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
                            <p></p><p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em></p>
                    </div>
                    </div>
                </div>
                </div>
                |
                <a href="mailto:podcast@thomzik.de" class="mailto">EMAIL</a>

        </footer>

        <!-----------------------------FOOTER ENDE--------------------------------------->
      `;
      
    }

  }
  
  customElements.define('footer-component', Footer);