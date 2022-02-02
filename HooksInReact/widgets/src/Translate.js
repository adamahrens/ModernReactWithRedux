import React, { useState, useEffect } from 'react'
import { Divider, Grid, Input, Button } from 'semantic-ui-react'
import DropdownWidget from './Dropdown'
import axios from 'axios'
import GOOGLE_TRANSLATE_API_KEY from './Keys'


// Allow selecting a language, entering text, and translating.
const languages = [
    { key: 'af', text: 'Afrikaans', value: 'af' },
    { key: 'ar', text: 'Arabic', value: 'ar' },
    { key: 'hi', text: 'Hindi', value: 'hi' },
    { key: 'de', text: 'German', value: 'de' }
]

const Translate = () => {
    const [language, setLanguage] = useState(languages[0])
    const [text, setText] = useState("")
    const [translated, setTranslated] = useState("")

    useEffect(() => {
        if (text.length === 0) {
            return
        }

        // Perform translation
        axios
            .post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language,
                    key: GOOGLE_TRANSLATE_API_KEY
                }
            }).then(function (response) {
                console.log(response);
                const data = response.data.data
                const translation = data.translations[0].translatedText
                setTranslated(translation)
            })
    }, [language, text])

    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <h1>Translator</h1>
                    <Grid.Row>
                        <Grid.Column >
                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input placeholder='Search...' size='big' value={text} onChange={(event, data) => {
                                            setText(event.target.value)
                                        }} />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button primary>Go!</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider />
                        </Grid.Column>
                        <Grid.Column>
                            <DropdownWidget option={language} onOptionChanged={setLanguage} options={languages} placeholder="Select Language" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                    <h1>{translated.length > 0 && 'Translation'}</h1>
                    <p>{translated}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Translate