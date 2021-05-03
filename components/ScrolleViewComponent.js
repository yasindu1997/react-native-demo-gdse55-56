import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

export default class ScrolleViewComponent extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text>
                        hello
                    </Text>
                </View>
                <Text> It has been four weeks since we reached out to the Github community with a thoroughly reviewed gap analysis and list of issues to improve React Native's accessibility. With the help of the React Native community, we are already making great progress on improving accessibility. Community members have been helping contributors, reviewing tests, and bringing attention to prior accessibility issues. Since March 8th the community has closed six issues with four pull requests and seven other pull requests are in the pipeline for review.

                While this work continues, the React Native and Accessibility teams at Facebook are evaluating accessibility bugs and issues that were submitted prior to this initiative, to determine if they are already covered by our current gap analysis or if there are additional issues that need to be brought into the project. One new issue has already been discovered and moved into the project, four others directly mapped to existing issues and two others are expected to be closed by addressing existing issues that address the root cause of their issue.

Thank you to all the community members who have participated. You are truly moving the needle in making React Native more accessible for everyone! 
It has been four weeks since we reached out to the Github community with a thoroughly reviewed gap analysis and list of issues to improve React Native's accessibility. With the help of the React Native community, we are already making great progress on improving accessibility. Community members have been helping contributors, reviewing tests, and bringing attention to prior accessibility issues. Since March 8th the community has closed six issues with four pull requests and seven other pull requests are in the pipeline for review.

While this work continues, the React Native and Accessibility teams at Facebook are evaluating accessibility bugs and issues that were submitted prior to this initiative, to determine if they are already covered by our current gap analysis or if there are additional issues that need to be brought into the project. One new issue has already been discovered and moved into the project, four others directly mapped to existing issues and two others are expected to be closed by addressing existing issues that address the root cause of their issue.

Thank you to all the community members who have participated. You are truly moving the needle in making React Native more accessible for everyone!
</Text>
            </ScrollView>
        )
    }
}
