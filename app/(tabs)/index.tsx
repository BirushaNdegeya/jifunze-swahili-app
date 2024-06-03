import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Mlango() {
  return (
    <ScrollView style={{ flex: 1}}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <Text>
          Asemaye sarufi anajulisha mpango barabara wa lugha fulani. Mpango huo umepashwa kuendekezwa kwa taratibu za kila aina. Bila kufahamu vema mipango ya lugha, mtu hatausema wala kuuandika sawa

          Lugha ni chombo kionyeshacho upeo wa kustaarabika kwa wananchi, ndimo utamaduni unajaliwa uhai wa kusaidia wananchi kufahamiana, kuelewana na kuunga umoja. Kabila hailitafaulu kuendelea vema bila lugha inayotukuka mioyoni mwa wakaaji. Kweli, lugha ni chombo cha samani kuu.

          Wakoloni walijua vile, ndiyo maana wakajikaza kutukuzisha ulimi wao zakitetea umaskini na unyonge wa lugha za watawaliwa. Nasi, katika ujinga wetu, tukapendelea na tukatukuza tu lugha za kigeni kama kifransa, kingereza na kireno.

          Kiisha kupata uhuru wetu, tumetambua kama sherti turudie kwa matumizi ya lugha zetu, hasa zile zinazounganisha mataifa mbalimbali, kama lugha ya lingala, ya tshiluba, ya kikongo na ya Kiswahili.

          Tukichungulia mwanzo na muundo wa lugha ya Kiswahili, twatambua kama kilizuka kwa misemo mbalimbali ya Wabantu wa visiwa Unguja na Pemba na wale wa pwani Tambarare ya Afrika Mashariki.

          Hadisi ya Afrika Mashariki yatujulisha kama Wasumeri au Wapersi wafanya biashara wamesafiri toka Azia mpaka Unguja (Zanzibar au bara ya weusi-zenj, katika kipersi) nyakati ya myaka 5.000 mbele ya kristu azaliwe. Wakastarehe kule visiwani Unguja, Pemba na Mafia, hata leo wameitwa Shirazi. Wakazunguka pwani ya bara la Afrika wakifanya biashara na weusi wa bara. Ulimi waliotumia ulitokea kwa kiunguja na ndimi za pwani sawa Tanga, Kwere, Giriama, Zaramo, Ndengereko, Lumi, Konde, ... Ulimmi ule umepagwa jina la swahili (suael = lugha ya pwani).

          Myaka kwa myaka wakaja waharabu, mayahudi, wareno kwa kutafuta bizaa vya samani : feza, ubani, zahabu, shaba, pembe za tembo, tausi, ... Wengine wametafuta pia ukoloni. Kwa gana la 8 nyumba ya kuzaliwa kwa kristu (739) kumetendeka vita vya Mohamedi katika Arabia. Waarabu wengi wakimbizi wakafululiza pwani ya Afrika Mashariki.

          Wakauunga ujamaa na wakaaji wa pwani : Ndivyo kukatokea kundi la chotachota. Wakajifunza na kutumia lugha ya kiswahili, wakiingiza maneno tele ya kiharabu. Mwandishi mmoja jina lake Ibn Batuta amesafiri mwaka wa 1324, toka Hispania kuenda Heji Maka, na kiisha akazunguka mpaka Kilwa. Basi amehadisia safari yake akipasha kama lugha ya pale pwani ni kiswahili.

          Ni hasa tangu gana la 18 kiswahili kimeanza kutandaa na kuvuma. Maandiko ya Dr. Krapf tangu 1845, tena Steere tangu mwaka 1870, na ya Padri Charles Sacieux mwaka 1887. Shirika la uchunguzi wa lugha ya kiswahili mwaka 1930 pamoja na maandiko yote ya katibu wake Jonson, maandiko tele ya mapadri weupe wa haut-Zaire mwaka 1890, na yale ya shirika za waprontestanti pa Kisangani, vikaendelesha na kueneza kiswahili kwa namna yote katika Jamhuri za Tanzania, Kenya, Uganda, Rwanda, Burundi, na katika sehemu za Ethiopia, Sudani, Zambia, Buki, ... Nchi nyingi za bara la Afrika, Ulaya, Azia na amerika, ... zatoa habari za radio katika kiswahili.

          Basi Kiswahili. Kinazidi kutandaa na kuvuma kwa ginsi si msemo tu wa wakaaji wa pwani, bali ni lugha ya sehemu kubwa ya Afrika. Kweli tunaweza kusema kama kiswahili kimegeuka Kibantu maana yake lugha ya asili ya Bantu.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
