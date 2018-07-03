import { shallow } from 'enzyme'
import * as React from 'react'

import { mockAssessments } from '../../../mocks/assessmentAPI'
import AssessmentWorkspace, { AssessmentWorkspaceProps } from '../AssessmentWorkspace'

const defaultProps: AssessmentWorkspaceProps = {
  activeTab: 0,
  assessmentId: 0,
  editorWidth: '50%',
  handleAssessmentFetch: (assessmentId: number) => {},
  handleChangeActiveTab: (activeTab: number) => {},
  handleChapterSelect: (chapter: any, changeEvent: any) => {},
  handleEditorEval: () => {},
  handleEditorValueChange: (val: string) => {},
  handleEditorWidthChange: (widthChange: number) => {},
  handleInterruptEval: () => {},
  handleReplEval: () => {},
  handleReplOutputClear: () => {},
  handleReplValueChange: (newValue: string) => {},
  handleSideContentHeightChange: (heightChange: number) => {},
  isRunning: false,
  output: [],
  questionId: 0,
  replValue: ''
}

const mockUndefinedAssessmentWorkspaceProps: AssessmentWorkspaceProps = {
  ...defaultProps
}

const mockProgrammingAssessmentWorkspaceProps: AssessmentWorkspaceProps = {
  ...defaultProps,
  assessment: mockAssessments[0],
  assessmentId: 0,
  questionId: 0
}

const mockMcqAssessmentWorkspaceProps: AssessmentWorkspaceProps = {
  ...defaultProps,
  assessment: mockAssessments[0],
  assessmentId: 0,
  questionId: 2
}

test('AssessmentWorkspace page "loading" content renders correctly', () => {
  const app = <AssessmentWorkspace {...mockUndefinedAssessmentWorkspaceProps} />
  const tree = shallow(app)
  expect(tree.debug()).toMatchSnapshot()
})

test('AssessmentWorkspace page with programming question renders correctly', () => {
  const app = <AssessmentWorkspace {...mockProgrammingAssessmentWorkspaceProps} />
  const tree = shallow(app)
  expect(tree.debug()).toMatchSnapshot()
})

test('AssessmentWorkspace page with MCQ question renders correctly', () => {
  const app = <AssessmentWorkspace {...mockMcqAssessmentWorkspaceProps} />
  const tree = shallow(app)
  expect(tree.debug()).toMatchSnapshot()
})