const fs = require('fs');
const crypto = require('crypto')

let gesture= './gesture.key' 
let buffer, hash, stop = false

function _( Arr, first ){

	if ((Arr.length - first) <= 1 && !stop){

		console.log(`\x1b[0mTrying with →\x1b[34m ${Arr.join('|')}`)

        const shasum = crypto.createHash('sha1')    
        if(shasum.update(Buffer.from(Arr)).digest('hex') == hash){

			stop = true
            console.log(`\x1b[32m\nGesture Found Successfully!:\x1b[0m ${Arr.join('|')}\n`)

			console.table({
				'Gesture.key' : {'Values' : buffer},
				'SHA-1      ' : {'Values' : hash},
				'Crack (Hex)' : {'Values' : `0${Arr.join(' 0')}`},
				'Gesture    ' : {'Values': `From [${Arr.map(num => num + 1).join('] → [')}]`},
			})

			console.log('\nPress any key to exit\n');
			process.stdin.setRawMode(true); process.stdin.resume();
			process.stdin.on('data', process.exit.bind(process, 0));

        }

	} else {

		for (let i = 0; i < Arr.length-first ; i++) _(_round(Arr, first), first+1)
		
	}

}

function _round(Arr, i){

	let temp = Arr[i]
	for (let j=i; j < Arr.length-1; j++) Arr[j] = Arr[j+1] 
	Arr[Arr.length-1] = temp

	return Arr
	
}

fs.readFile(gesture, function (err, data) {

	buffer = data
	hash = data.toString('hex')

	_([0,1,2,3,4,5,6,7,8], 0);

})