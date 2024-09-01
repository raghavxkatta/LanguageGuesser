const franc= require('franc')/* library to detect language codes */
const langs= require('langs')/* library to get language names from language codes */
const input= process.argv[2]/* to get the input text from command-line arguments */
const colors= require("colors")
const langCode=franc(input)/* detect langCode from input */
if(langCode==='und'){/* so lang gives "und" whenever the language is undetectable */
    console.log("SORRY COULDN'T FIGURE OUT! TRY WITH MORE SAMPLE TEXT".red)
}
else{
const language=langs.where("3",langCode)/* we will want to use the method and we'll pass in 3 because that's the version of the spec franc uses */
if(language){/* to check if language is defined */
console.log(`Our best guess is ${language.name}`.green)
}
else{
    console.log("Language not recognised. Try with a different text".red)
}}
