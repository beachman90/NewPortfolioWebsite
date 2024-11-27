import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-text-DEFAULT dark:text-text-dark">Om Meg</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-lg">
                <Image
                  src="/images/vinjerock.volleyball.jpg"
                  alt="Jan Inge Kirsebom Strandman"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-text-DEFAULT dark:text-text-dark">Jan Inge Kirsebom Strandman</h3>
              <p className="text-text-light dark:text-gray-300">34 år, Tønsberg</p>
              <p className="text-text-light dark:text-gray-300">Fullstack-utvikler</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-text-DEFAULT dark:text-text-dark">Fra Miljøarbeid til Utvikling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-DEFAULT dark:text-text-dark mb-4">
                  Hei! Jeg er Jan Inge, bosatt i Tønsberg med kona mi og våre tre barn. Som nyutdannet fullstack-utvikler 
                  har jeg funnet min plass i teknologiverdenen etter et spennende karrierebytte som viser at det aldri er 
                  for sent å følge nye interesser og ta en risk.
                </p>
                <p className="text-text-DEFAULT dark:text-text-dark mb-4">
                  Min vei til programmering har vært litt utradisjonell. Etter flere år som miljøarbeider, hvor jeg jobbet 
                  med mennesker, oppdaget jeg en økende interesse for teknologi og programmering. Det som startet med 
                  nysgjerrighet og utforsking på kveldstid, har utviklet seg til en ny karriere som jeg er genuint engasjert i.
                </p>
                <h4 className="text-lg font-semibold text-text-DEFAULT dark:text-text-dark mt-6 mb-2">Min Tekniske Kompetanse</h4>
                <p className="text-text-DEFAULT dark:text-text-dark mb-2">
                  Gjennom intensiv læring har jeg bygget opp solid kunnskap innen moderne utviklingsverktøy:
                </p>
                <ul className="list-disc list-inside text-text-DEFAULT dark:text-text-dark mb-4">
                  <li>Frontend: React og TypeScript for utvikling av brukergrensesnitt</li>
                  <li>Backend: C# og .NET for systemutvikling</li>
                  <li>Databaser og API-er for integrasjon</li>
                  <li>Azure for skybaserte løsninger</li>
                  <li>Testing og Agile metodikk for kvalitetssikring</li>
                </ul>
                <h4 className="text-lg font-semibold text-text-DEFAULT dark:text-text-dark mt-6 mb-2">Erfaring Fra To Verdener</h4>
                <p className="text-text-DEFAULT dark:text-text-dark mb-2">
                  Min bakgrunn fra arbeid med mennesker gir meg verdifulle tilleggsferdigheter i utviklerrollen:
                </p>
                <ul className="list-disc list-inside text-text-DEFAULT dark:text-text-dark mb-4">
                  <li>Erfaring med teamarbeid og prosjektledelse</li>
                  <li>God til å formidle tekniske konsepter</li>
                  <li>Fokus på kontinuerlig læring</li>
                </ul>
                <h4 className="text-lg font-semibold text-text-DEFAULT dark:text-text-dark mt-6 mb-2">Utenom Jobben</h4>
                <p className="text-text-DEFAULT dark:text-text-dark mb-4">
                  Jeg er aktiv i Tønsberg Volleyballklubb med roller som trener, lagleder og sportslig leder. På fritiden 
                  er jeg også engasjert i frisbeegolf, padel tennis og styrketrening. Disse aktivitetene holder både kropp 
                  og hode i gang, og gir meg energi til å takle nye utfordringer i kodehverdagen.
                </p>
                <h4 className="text-lg font-semibold text-text-DEFAULT dark:text-text-dark mt-6 mb-2">Hva Jeg Ser Etter</h4>
                <p className="text-text-DEFAULT dark:text-text-dark mb-2">
                  Jeg søker et utviklermiljø hvor jeg kan:
                </p>
                <ul className="list-disc list-inside text-text-DEFAULT dark:text-text-dark mb-4">
                  <li>Utvikle meg faglig i et sterkt team</li>
                  <li>Løse reelle problemer med teknologi</li>
                  <li>Være del av et miljø som verdsetter samarbeid og vekst</li>
                </ul>
                <h4 className="text-lg font-semibold text-text-DEFAULT dark:text-text-dark mt-6 mb-2">Til Slutt</h4>
                <p className="text-text-DEFAULT dark:text-text-dark mb-4">
                  Som utvikler med bakgrunn fra andre felt, bringer jeg med meg et bredt perspektiv og solid erfaring med 
                  mennesker og problemløsning. Jeg tror på at de beste løsningene kommer når man kombinerer teknisk kunnskap 
                  med praktisk erfaring og god kommunikasjon.
                </p>
                <p className="text-text-DEFAULT dark:text-text-dark">
                  Ta gjerne kontakt hvis du vil høre mer om min faglige reise eller diskutere muligheter innen utvikling!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}