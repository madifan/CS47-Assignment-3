import { StyleSheet, SafeAreaView, Text, Pressable, Image, View, Dimensions, FlatList } from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "../../utils";
import { Themes } from "../../assets/Themes";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListItem ({imageURL, name, artist, album, duration, index}) {;
    return (
    <View style={styles.item}>
        <Text style={styles.index}>{index}</Text>
        <Image style={styles.albumCover} source={{uri:imageURL}}/>
        <View style={styles.song_artist}>
            <Text numberOfLines={1} style={styles.text}>{name}</Text>
            <Text numberOfLines={1} style={[styles.text, styles.lowOpacity]}>{artist}</Text>
        </View>
       <Text numberOfLines={1} style={[styles.text,styles.albumText]}>{album}</Text>
       <Text style={styles.duration}>{duration}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        width: windowWidth,
        height: 0.08 * windowHeight,
        alignItems: "center",
        marginTop: 8,
        marginBottom:8,
    },
    index: {
        fontSize: windowWidth * 0.032 ,
        flex: 0.4,
        color: Themes.colors.white ,
        opacity: 0.6,
        marginLeft: windowWidth * 0.05,
        marginRight: 12,
    },
    duration: {
        fontSize: windowWidth * 0.032 ,
        color: Themes.colors.white,
        opacity: 0.6,
        marginLeft: 12,
        marginRight: windowWidth * 0.05,
    },
    albumCover: {
        height:'100%',
        flex: 1,
        resizeMode: "contain",
    },
    song_artist: {
        flex: 2,
        marginRight: 12,
        marginLeft: 12,
        justifyContent: 'center',
    },
    text: {
        fontSize: windowWidth * 0.032 ,
        color: Themes.colors.white,
    },
    lowOpacity: {
        opacity: 0.6,
    },
    albumText: {
        flex: 1,
    }
  });
  