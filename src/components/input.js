// import React from 'react';
// import {View, StyleSheet, TextInput} from 'react-native';

// const Input = () => {
//     return (
//         <View style={styles.container}>
//             <TextInput/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//     }
// })

// export default Input;

<View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text style={styles.uploadBtn}>Upload Profile Image</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
        {profileImage ? (
          <Text
            onPress={uploadProfileImage}
            style={[
              styles.skip,
              { backgroundColor: 'green', color: 'white', borderRadius: 8 },
            ]}
          >
            Upload
          </Text>
        ) : null}
      </View>
    </View>