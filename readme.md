# 🔑 Android lock pattern finder
The Android lock pattern works as follows: nine pads are arranged in the form of a grid numbered from 1 to 9. 
Whene the user define his password (lock pattern), Android encode the password in `Hexadecimal` and encrypte it in `SHA-1` then  store it in: /android/data/system/gesture.key`.

**Android lock pattern finder** open the `gesture.key` file and read the encrypted password then generate SHA-1 hashes using permutations of numbers (0 to 8) untill it found the same hash stored in gesture.key.  
The numbers used to find this hash will incremented by 1 to display the right password.

## Preview 👀
![main](https://i.ibb.co/rw7k89C/screenshot.png)

## Installation ⚙️
1. Fork/Clone/Download this repo
```
git clone https://github.com/dz-root/Android-lock-pattern-finder.git
```
2. `cd ./Android lock pattern finder`
3. Move `gesture.key` inside `/Android lock pattern finder` and **run**: `npm start`

## Ressources
1. [spreitzenbarth.de](https://forensics.spreitzenbarth.de/2012/02/28/cracking-the-pattern-lock-on-android/)
2. [infosecinstitute.com](https://resources.infosecinstitute.com/topic/android-forensics-cracking-the-pattern-lock-protection/)

## Contributing 💡
You can propose a feature request opening an issue or a pull request.