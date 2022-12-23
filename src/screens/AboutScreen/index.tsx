import React from "react";
import {AboutScreenContainer} from "./styles";
import {Text, Paper, Badge, MantineTheme, useMantineTheme, Center, AspectRatio} from '@mantine/core';


const AboutScreen: React.FC = () => {
    const theme: MantineTheme = useMantineTheme();
    return (
        <AboutScreenContainer>
            <Paper shadow="lg" radius="md" p="md" sx={{
                maxWidth: 1250
            }}>
                <Center style={{
                    marginBottom: 20
                }}>
                    <div style={{maxWidth: 300}}>
                        <Badge variant="outline" size={"xl"} radius={"sm"}
                               color={theme.colorScheme === "dark" ? "green" : "dark"} fullWidth>
                            Hakkımızda
                        </Badge>
                    </div>
                </Center>


                <Text size={"lg"}>
                    Sakarya Üniversitesi Eğitim ve Araştırma Hastanesi
                    Acil Servisi ilimizin en büyük ve en yoğun acil servisidir
                    2019 yılı verilerine göre günde ortalama 1100 hasta
                    acil servis hizmetinden yararlanmaktadır ve ülkemizdeki
                    tüm acil servisler arasında başvuru sayısında ilk on acil
                    servis içinde yer almaktadır.
                    <Center my={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe
                                style={{borderRadius: 16}}
                                src="https://www.youtube.com/embed/NT4wytWQ7CA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </AspectRatio>

                    </Center>
                    Acil servis yeşil, sarı, travma, kritik alan ve acil yoğun bakım olarak beş ayrı bölümde hizmet
                    vermektedir. sedye monitorlü gözlem biriminde (sarı alan) , sedye monitörsüz gözlem biriminde,
                    sedye hızlı bakı birimlerinde (yeşil alan), sedye müdahale odasında (travma), olmak üzere toplam
                    sedye ile hizmet vermektedir. Yeniden canlandırma odası ve travma müdahale odalarında birer adet
                    USG bulunmaktadır. Acile özel olarak sunulan tomografi ve röntgen cihazı 24 saat aktif
                    kullanılmaktadır.
                    <br/>
                    <br/>
                    Acil servise başvuran tüm hastalar hemşireler tarafından değerlendirilerek hastalığının
                    aciliyetine göre sınıflandırılıp (triaj) uygun bölüme alınmaktadır. Yakın takip ve tedavi
                    gerektiren; kalp hastalığı, solunum sıkıntısı gibi yakınmaları olan hastalar monitorlü alanda
                    değerlendirilirken, yakın takip gerektirmeyen hastalar, baş ağrısı, karın ağrısı ve benzeri
                    yakınması olan hastalar ise monitörsüz gözlem ve yeşil alanda değerlendirilmektedirler.
                    <br/>
                    <br/>


                    Acil servise başvuran hastaların ortalama bekleme süreleri 5 dakikanın altında olmasına rağmen,
                    kalabalık saatlerde hayatı tehdit edici yakınması olmayan hastalar için bu süre uzayabilmektedir.
                    Çoklu travma hastaları ise hızla resüsitasyon odasına alınmakta ve acil tıp uzmanı gözetiminde acil
                    tıp asistanı tarafından değerlendirilmekte ve gerekli tedavileri yapılmaktadır.

                    <Center my={"md"}>
                        <AspectRatio
                            ratio={6.5 / 3.4}
                            sx={{width: "100%"}}
                        >
                            <iframe
                                style={{borderRadius: 16}}
                                src="https://www.youtube.com/embed/9ZGsMXDWvCA"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </AspectRatio>

                    </Center>
                    Hastaların yapılan tetkik ve tedavilerinin ardından yatış gerektiren bir durum saptanırsa uygun
                    bölümden konsültasyon istenip hasta ilgili bölüme yatırılmaktadır.

                    <br/>
                    <br/>

                    Acil servis haftada 7 gün ve günde 24 saat hizmet yükü olan bir alan olmasına rağmen geleceğin acil
                    tıp uzmanlarının yetiştirilmesine de önem verilmektedir. Bu nedenle Acil Tıp Uzmanlık Eğitimi
                    Çekirdek Müfredatı'na uygun şekilde hastalar için gerekli tedavi ve girişimler acil tıp uzmanlarının
                    gözetiminde acil tıp asistanları tarafından güvenle uygulanabilmektedir.


                </Text>
            </Paper>
        </AboutScreenContainer>
    )
}

export default AboutScreen
