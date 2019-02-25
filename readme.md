# WBApi
WBApi on kolmannen osapuolen toteuttama rajapinta Word Bankin hiilidioksidi- sekä väestöluku datan kyselemiseen sekä visualisointiin.

Visuaalisen sovelluksen löytää herokusta\
[http://ukonhattu-wbapi.herokuapp.com/]()

Sovelluksella voi piirtää käyrän eri maiden vuosittaisista hiilidioksidipäästöistä absoluuttisena määränä tai väkilukuun suhteutettuna sekä vertailla niitä muiden maiden vastaaviin käyriin.

Lisätäksei uuden maan datan käyrään kirjoita sen nimi input laatikkoon (englanniksi) ja paina Add tai enteriä. Voit lisätä niin monta maata kuin haluat. Voit ottaa ruksin pois "per capita" valinnasta jos haluat absoluuttisia arvoja. Et voi muuttaa valintaa jos sinulla on taulukossa jotakin dataa.

Maat listataan taulukon alla. Näet sieltä mikä väri viittaa mihinkin maahan ja voit poistaa haluamasi maiden datan taulukosta. Voit poistaa kaikki käyrät painamalla reset nappulaa.

Voit valita dynaamisesti näyttetävän välin vuosissa.

## Api ##

Voit suorittaa kyselyjä apille saadakseni dataa json muodossa
Kaikki kyselyt suoritetaan osoitteeseen  
`http://ukonhattu-wbapi.herokuapp.com/<query>`

----
>Tietyn maan hiilidioksidipäästöt vuosittain  
`/api/co2/country/<country name>`

>Tietyn maan hiilidioksidipäästöt tiettynä vuonna  
`/api/co2/country/<country name>/<year>`

>Tietyn maan hiilidioksidipäästöt tietyllä välillä  
`/api/co2/country/<country name>/<year start>/<year stop>`

>Tietyn maan väestöluku vuosittain  
`/api/pop/country/<country name>`

>Tietyn maan väestöluku tiettynä vuonna  
`/api/pop/country/<country name>/<year>`  

>Tietyn maan väestöluku tietyllä välillä  
`/api/pop/country/<country name>/<year start>/<year stop>`

---
Voit kysyä myös kaikkien maiden kaikki hiilidiokisipäästöt\
`/api/co2`  
tai kaikkien maiden väkiluvun kaikkina vuosina\
`/api/pop`  
(oikeasti molemmat datat alkavat vuodesta 1960!)\
Nämä eivät tule yhtä kivana muotona vaan ovat vain parsettu csv tiedosto

# Datan ajantasaisuus
Serveri lataa kerran viikossa world bankista uudet csv tiedostot

# Testit
Testit ... tulevat joskus :)


