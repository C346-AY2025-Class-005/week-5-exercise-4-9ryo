import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button, StatusBar, StyleSheet, SectionList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import * as Font from 'expo-font';

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'MiltonOne': require('./assets/fonts/Milton_One_Bold.otf'),

            });
            setFontsLoaded(true);
        }

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null; // Do not render app until fonts load
    }


    const fashionSections = [
        {
            title: "Undercover by Jun Takahashi",
            color: "#2C2C2C",
            logo: "https://callvalerio.com/wp-content/uploads/2022/04/UNDERCOVER-Logo.png",
            data: [
                {
                    name: "Undercover “The Amazing Tale of Zamiang” Striped Tee",
                    size: "2",
                    season: "Spring/Summer 2006",
                    price: "180 USD",
                    img: "https://archivereloaded.com/cdn/shop/products/image_1a103b74-b55a-4f77-a067-b4a94380e245.jpg?v=1577950194",
                },
                {
                    name: "Undercover Chuuut Wahnfrieden Cargo Flare Denim Jeans",
                    size: "2",
                    season: "Spring/Summer 2006",
                    price: "600 USD",
                    img: "https://media-assets.grailed.com/prd/listing/48567955/e315cec5c4624eedbe0f814fd80136a8",
                }
            ]
        },

        {
            title: "Raf Simons",
            color: "#F5F5DC",
            logo: "https://d1mrofrbtdll1g.cloudfront.net/ed/brands/image/2020/71/1597935154433.png",
            data: [
                {
                    name: "Raf Simons ‘Riot, Riot, Riot’ Patch Striped Turtleneck Sweater",
                    size: "48",
                    season: "Autumn/Winter 2001",
                    price: "5000-10000 USD",
                    img: "https://static.wixstatic.com/media/25abdb_307955a1d7b040ccb3d7bd99ad086353~mv2.jpg/v1/fill/w_452,h_602,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/25abdb_307955a1d7b040ccb3d7bd99ad086353~mv2.jpg",
                },
                {
                    name: "Raf Simons ‘Riot! Riot! Riot!’ Olive Green Patchwork Crewneck",
                    size: "46",
                    season: "Autumn/Winter 2001",
                    price: "5000~ USD",
                    img: "https://static.wixstatic.com/media/25abdb_0d34e8f63f5b40bfb1e5af50f313c79a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
                }
            ]
        },

        {
            title: "Rick Owens",
            color: "#CBBFAE",
            logo: "https://1000logos.net/wp-content/uploads/2022/12/Rick-Owens-Logo.png",
            data: [
                {
                    name: "Rick Owens Banana Cut Bolan Denim",
                    size: "32",
                    season: "Autumn/Winter 2023",
                    price: "1200~ USD",
                    img: "https://archivereloaded.com/cdn/shop/products/image_02d9cb7a-dcef-42b3-87ad-31e6762cd321.jpg?v=1664333563",
                },
                {
                    name: "Rick Owens DRKSHDW AW23 “LUXOR” Mineral Wash ‘Bias’ Spiral Flare Bootcut Denim",
                    size: "32",
                    season: "Autumn/Winter 2023",
                    price: "950~ USD",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq0Xb61zsDXIj7nJpxoVozk8CdD_TTMb6Fg&s",
                }
            ]
        }
    ];


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.cardItem}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardDetails}>Size: {item.size}</Text>
                <Text style={styles.cardDetails}>Season: {item.season}</Text>
                <Text style={styles.cardDetails}>Retail price: {item.price}</Text>

                <Image
                    source={{ uri: item.img }}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        );
    };


    const renderSectionHeader = ({ section }) => {
        return (
            <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                <Image
                    source={{ uri: section.logo }}
                    style={styles.sectionLogo}
                    resizeMode="contain"
                />
            </View>
        );
    };


    return (
        <ImageBackground
            source={{ uri: "https://www.moma.org/media/W1siZiIsIjQ1MDE0MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=a3a977dd6edaa34a" }}
            style={styles.backgroundImage}
            resizeMode="cover"

        >
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>My Fashion Wardrobe</Text>
                </View>

                <SectionList
                    sections={fashionSections}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    contentContainerStyle={styles.sectionListWrapper}
                />

                <StatusBar style="auto" />
            </ScrollView>
        </ImageBackground>
    );

}


const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },

    buttonWrapper: {
        marginHorizontal: 20,
        marginBottom: 12,
    },

    titleBox: {
        paddingVertical: 12,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },

    titleText: {
        fontSize: 55,
        fontFamily: 'MiltonOne',
        color: 'white',
    },

    sectionListWrapper: {
        paddingHorizontal: 20,
    },

    sectionHeader: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sectionHeaderText: {
        fontSize: 18,
        fontWeight: '700',
    },

    cardItem: {
        backgroundColor: 'rgba(242,242,242,0.5)',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2, // for Android shadow
    },

    cardName: {
        fontSize: 16,
        fontWeight: '600',
    },

    cardImage: {
        width: '100%',
        height: 200,
        marginTop: 10,
        borderRadius: 8,
    },

    cardTextWrapper: {
        marginBottom: 10,
    },

    sectionLogo: {
        height: 70,
        width: undefined,
        aspectRatio: 5,
        resizeMode: 'contain',
    },

    cardDetails: {
        fontSize: 14,
        color: '#333',
        marginTop: 3,
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },




});
