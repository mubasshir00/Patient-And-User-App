import { Accordion, Box } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { profileAccordion } from '../../../assets/data/Accordion'
import PersonalInformation from "./PersonalInformation"
import BiologicalInfo from './BiologicalInfo'
const AccordionCom = () => {
    return (
        <Box m={3}>
            <Accordion allowMultiple>

                <Accordion.Item>
                    <Accordion.Summary>
                        Personal Information
                        <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        <PersonalInformation/>
                    </Accordion.Details>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Summary>
                        Biological Information
                        <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        <BiologicalInfo/>
                    </Accordion.Details>
                </Accordion.Item>


                <Accordion.Item>
                    <Accordion.Summary>
                        Medical Information
                        <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        Medical Information
                    </Accordion.Details>
                </Accordion.Item>


                <Accordion.Item>
                    <Accordion.Summary>
                        Social Information
                        <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        Social Information
                    </Accordion.Details>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Summary>
                        Transaction History
                        <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                        Transaction History
                    </Accordion.Details>
                </Accordion.Item>

            </Accordion>
        </Box>
    )
}

export default AccordionCom

const styles = StyleSheet.create({})
