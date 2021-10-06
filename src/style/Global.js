import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      body:{
        flex:1,
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:15,
      },

    //   ONLY FOR SEARCH AREA ON SEARCH RESULT SCREEN
    searchAreaContainer:{
        paddingVertical:10,
        width:'80%',
      },
    //   FOR SEARCH CONTAINER ON MOVIE AND TV SHOW SCREEN
      searchContainer:{
        paddingVertical:30,
        width:'70%'
      },
    //   FOR ARTICLES
    articleContainer: {
        width:'90%',
        flexDirection:'row',
        paddingVertical:5,
        marginBottom:5,
    },
    imageContainer: {
        flexBasis:90,
        height:100,
    },
    articleInfoContainer:{
        paddingHorizontal:10,
        flex:1

    },
    articleInfo:{
        paddingVertical:2
    },
    image:{ // WORKS FOR ALL IMAGES(ARTICLE AND SHOW PAGE)
        flex:1,
        resizeMode:'cover',
    },

    // FOR SHOW PAGE 
    showPageContainer: {
        width:'90%',
        alignItems: 'center',
        alignSelf: 'center',
        flex:1,
    },
    titleContainer:{
        paddingVertical:30,
    },
    title:{
        fontSize:25
    },
    imageShowPageContainer:{
        flex:1,
        width:"80%",
        maxHeight:450
    },

    overviewContainer:{
        width:"80%",
        paddingVertical:30,
        
    },
    overview:{
        textAlign: "justify"
    },
    popRelContainer:{
        flexDirection: 'row',
        paddingVertical:10,
    },
});

export const customPickerStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 5,
      paddingHorizontal: 10,
      width:'100%',
      borderWidth: 1,
      borderColor: '#222f3e',
      borderRadius: 8,
      color: '#222f3e',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#222f3e',
      borderRadius: 8,
      color: '#222f3e',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });