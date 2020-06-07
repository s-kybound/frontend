import { createDefaultWorkspace } from '../../application/ApplicationTypes';
import { ExternalLibraryNames } from '../../application/types/ExternalTypes';
import { HIGHLIGHT_LINE } from '../../application/types/InterpreterTypes';
import { Library } from '../../assessment/AssessmentTypes';
import { SideContentType } from '../../sideContent/SideContentTypes';
import {
  beginClearContext,
  browseReplHistoryDown,
  browseReplHistoryUp,
  changeChapter,
  changeEditorHeight,
  changeEditorWidth,
  changeExternalLibrary,
  changeSideContentHeight,
  chapterSelect,
  clearReplInput,
  clearReplOutput,
  clearReplOutputLast,
  endClearContext,
  ensureLibrariesLoaded,
  evalEditor,
  evalRepl,
  evalTestcase,
  externalLibrarySelect,
  fetchChapter,
  highlightEditorLine,
  moveCursor,
  navigateToDeclaration,
  resetTestcase,
  resetWorkspace,
  sendReplInputToOutput,
  setEditorBreakpoint,
  toggleEditorAutorun,
  updateActiveTab,
  updateChapter,
  updateCurrentAssessmentId,
  updateCurrentSubmissionId,
  updateEditorValue,
  updateHasUnsavedChanges,
  updateReplValue
} from '../WorkspaceActions';
import {
  BEGIN_CLEAR_CONTEXT,
  BROWSE_REPL_HISTORY_DOWN,
  BROWSE_REPL_HISTORY_UP,
  CHANGE_CHAPTER,
  CHANGE_EDITOR_HEIGHT,
  CHANGE_EDITOR_WIDTH,
  CHANGE_EXTERNAL_LIBRARY,
  CHANGE_SIDE_CONTENT_HEIGHT,
  CHAPTER_SELECT,
  CLEAR_REPL_INPUT,
  CLEAR_REPL_OUTPUT,
  CLEAR_REPL_OUTPUT_LAST,
  END_CLEAR_CONTEXT,
  ENSURE_LIBRARIES_LOADED,
  EVAL_EDITOR,
  EVAL_REPL,
  EVAL_TESTCASE,
  FETCH_CHAPTER,
  MOVE_CURSOR,
  NAV_DECLARATION,
  PLAYGROUND_EXTERNAL_SELECT,
  RESET_TESTCASE,
  RESET_WORKSPACE,
  SEND_REPL_INPUT_TO_OUTPUT,
  TOGGLE_EDITOR_AUTORUN,
  UPDATE_ACTIVE_TAB,
  UPDATE_CHAPTER,
  UPDATE_CURRENT_ASSESSMENT_ID,
  UPDATE_CURRENT_SUBMISSION_ID,
  UPDATE_EDITOR_BREAKPOINTS,
  UPDATE_EDITOR_VALUE,
  UPDATE_HAS_UNSAVED_CHANGES,
  UPDATE_REPL_VALUE,
  WorkspaceLocation,
  WorkspaceLocations
} from '../WorkspaceTypes';

const assessmentWorkspace: WorkspaceLocation = WorkspaceLocations.assessment;
const gradingWorkspace: WorkspaceLocation = WorkspaceLocations.grading;
const playgroundWorkspace: WorkspaceLocation = WorkspaceLocations.playground;

test('browseReplHistoryDown generates correct action object', () => {
  const action = browseReplHistoryDown(assessmentWorkspace);
  expect(action).toEqual({
    type: BROWSE_REPL_HISTORY_DOWN,
    payload: { workspaceLocation: assessmentWorkspace }
  });
});

test('browseReplHistoryUp generates correct action object', () => {
  const action = browseReplHistoryUp(gradingWorkspace);
  expect(action).toEqual({
    type: BROWSE_REPL_HISTORY_UP,
    payload: { workspaceLocation: gradingWorkspace }
  });
});

test('changeExternalLibrary generates correct action object', () => {
  const newExternal = 'new-external-test';
  const action = changeExternalLibrary(newExternal, playgroundWorkspace);
  expect(action).toEqual({
    type: CHANGE_EXTERNAL_LIBRARY,
    payload: {
      newExternal,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('changeEditorHeight generates correct action object', () => {
  const height = 120;
  const action = changeEditorHeight(height, assessmentWorkspace);
  expect(action).toEqual({
    type: CHANGE_EDITOR_HEIGHT,
    payload: {
      height,
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('changeEditorWidth generates correct action object', () => {
  const widthChange = '120';
  const action = changeEditorWidth(widthChange, assessmentWorkspace);
  expect(action).toEqual({
    type: CHANGE_EDITOR_WIDTH,
    payload: {
      widthChange,
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('changeSideContentHeight generates correct action object', () => {
  const height = 100;
  const action = changeSideContentHeight(height, gradingWorkspace);
  expect(action).toEqual({
    type: CHANGE_SIDE_CONTENT_HEIGHT,
    payload: {
      height,
      workspaceLocation: gradingWorkspace
    }
  });
});

test('chapterSelect generates correct action object', () => {
  const chapter = 3;
  const variant = 'default';
  const action = chapterSelect(chapter, variant, playgroundWorkspace);
  expect(action).toEqual({
    type: CHAPTER_SELECT,
    payload: {
      chapter,
      variant,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('externalLibrarySelect generates correct action object', () => {
  const externalLibraryName = ExternalLibraryNames.SOUNDS;
  const action = externalLibrarySelect(externalLibraryName, assessmentWorkspace);
  expect(action).toEqual({
    type: PLAYGROUND_EXTERNAL_SELECT,
    payload: {
      externalLibraryName,
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('toggleEditorAutorun generates correct action object', () => {
  const action = toggleEditorAutorun(gradingWorkspace);
  expect(action).toEqual({
    type: TOGGLE_EDITOR_AUTORUN,
    payload: {
      workspaceLocation: gradingWorkspace
    }
  });
});

test('beginClearContext generates correct action object', () => {
  const library: Library = {
    chapter: 4,
    external: {
      name: ExternalLibraryNames.SOUNDS,
      symbols: []
    },
    globals: []
  };

  const action = beginClearContext(library, playgroundWorkspace);
  expect(action).toEqual({
    type: BEGIN_CLEAR_CONTEXT,
    payload: {
      library,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('clearReplInput generates correct action object', () => {
  const action = clearReplInput(assessmentWorkspace);
  expect(action).toEqual({
    type: CLEAR_REPL_INPUT,
    payload: {
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('clearReplOutputLast generates correct action object', () => {
  const action = clearReplOutputLast(assessmentWorkspace);
  expect(action).toEqual({
    type: CLEAR_REPL_OUTPUT_LAST,
    payload: {
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('clearReplOutput generates correct action object', () => {
  const action = clearReplOutput(gradingWorkspace);
  expect(action).toEqual({
    type: CLEAR_REPL_OUTPUT,
    payload: {
      workspaceLocation: gradingWorkspace
    }
  });
});

test('endClearContext generates correct action object', () => {
  const library: Library = {
    chapter: 4,
    external: {
      name: ExternalLibraryNames.SOUNDS,
      symbols: []
    },
    globals: []
  };

  const action = endClearContext(library, playgroundWorkspace);
  expect(action).toEqual({
    type: END_CLEAR_CONTEXT,
    payload: {
      library,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('ensureLibrariesLoaded generates correct action object', () => {
  const action = ensureLibrariesLoaded();
  expect(action).toEqual({
    type: ENSURE_LIBRARIES_LOADED
  });
});

test('evalEditor generates correct action object', () => {
  const action = evalEditor(assessmentWorkspace);
  expect(action).toEqual({
    type: EVAL_EDITOR,
    payload: {
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('evalRepl generates correct action object', () => {
  const action = evalRepl(gradingWorkspace);
  expect(action).toEqual({
    type: EVAL_REPL,
    payload: {
      workspaceLocation: gradingWorkspace
    }
  });
});

test('evalTestcase generates correct action object', () => {
  const testcaseId = 3;
  const action = evalTestcase(playgroundWorkspace, testcaseId);
  expect(action).toEqual({
    type: EVAL_TESTCASE,
    payload: {
      testcaseId,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('updateEditorValue generates correct action object', () => {
  const newEditorValue = 'new_editor_value';
  const action = updateEditorValue(newEditorValue, assessmentWorkspace);
  expect(action).toEqual({
    type: UPDATE_EDITOR_VALUE,
    payload: {
      newEditorValue,
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('setEditorBreakpoint generates correct action object', () => {
  const breakpoints = ['1', '2', '5'];
  const action = setEditorBreakpoint(breakpoints, gradingWorkspace);
  expect(action).toEqual({
    type: UPDATE_EDITOR_BREAKPOINTS,
    payload: {
      breakpoints,
      workspaceLocation: gradingWorkspace
    }
  });
});

test('highlightEditorLine generates correct action object', () => {
  const highlightedLines = [1, 2, 5];
  const action = highlightEditorLine(highlightedLines, playgroundWorkspace);
  expect(action).toEqual({
    type: HIGHLIGHT_LINE,
    payload: {
      highlightedLines,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('updateReplValue generates correct action object', () => {
  const newReplValue = 'new_repl_value';
  const action = updateReplValue(newReplValue, assessmentWorkspace);
  expect(action).toEqual({
    type: UPDATE_REPL_VALUE,
    payload: {
      newReplValue,
      workspaceLocation: assessmentWorkspace
    }
  });
});

test('sendReplInputToOutput generates correct action object', () => {
  const newOutput = 'new_output';
  const action = sendReplInputToOutput(newOutput, gradingWorkspace);
  expect(action).toEqual({
    type: SEND_REPL_INPUT_TO_OUTPUT,
    payload: {
      type: 'code',
      value: newOutput,
      workspaceLocation: gradingWorkspace
    }
  });
});

test('resetTestcase generates correct action object', () => {
  const index = 420;
  const action = resetTestcase(assessmentWorkspace, index);
  expect(action).toEqual({
    type: RESET_TESTCASE,
    payload: {
      workspaceLocation: assessmentWorkspace,
      index
    }
  });
});

test('resetWorkspace generates correct default action object', () => {
  const action = resetWorkspace(playgroundWorkspace);
  expect(action).toEqual({
    type: RESET_WORKSPACE,
    payload: {
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('resetWorkspace generates correct action object with provided workspace', () => {
  const workspaceOptions = createDefaultWorkspace(assessmentWorkspace);
  const action = resetWorkspace(assessmentWorkspace, workspaceOptions);
  expect(action).toEqual({
    type: RESET_WORKSPACE,
    payload: {
      workspaceLocation: assessmentWorkspace,
      workspaceOptions
    }
  });
});

test('updateActiveTab generates correct action object', () => {
  const activeTab = SideContentType.questionOverview;
  const action = updateActiveTab(activeTab, playgroundWorkspace);
  expect(action).toEqual({
    type: UPDATE_ACTIVE_TAB,
    payload: {
      activeTab,
      workspaceLocation: playgroundWorkspace
    }
  });
});

test('updateCurrentAssessmentId generates correct action object', () => {
  const assessmentId = 2;
  const questionId = 4;
  const action = updateCurrentAssessmentId(assessmentId, questionId);
  expect(action).toEqual({
    type: UPDATE_CURRENT_ASSESSMENT_ID,
    payload: {
      assessmentId,
      questionId
    }
  });
});

test('updateCurrentSubmissionId generates correct action object', () => {
  const submissionId = 3;
  const questionId = 6;
  const action = updateCurrentSubmissionId(submissionId, questionId);
  expect(action).toEqual({
    type: UPDATE_CURRENT_SUBMISSION_ID,
    payload: {
      submissionId,
      questionId
    }
  });
});

test('updateHasUnsavedChanges generates correct action object', () => {
  const hasUnsavedChanges = true;
  const action = updateHasUnsavedChanges(assessmentWorkspace, hasUnsavedChanges);
  expect(action).toEqual({
    type: UPDATE_HAS_UNSAVED_CHANGES,
    payload: {
      workspaceLocation: assessmentWorkspace,
      hasUnsavedChanges
    }
  });
});

test('navigateToDeclaration generates correct action object', () => {
  const cursorPosition = { row: 0, column: 0 };
  const action = navigateToDeclaration(playgroundWorkspace, cursorPosition);
  expect(action).toEqual({
    type: NAV_DECLARATION,
    payload: {
      workspaceLocation: playgroundWorkspace,
      cursorPosition
    }
  });
});

test('moveCursor generates correct action object', () => {
  const cursorPosition = { row: 0, column: 0 };
  const action = moveCursor(playgroundWorkspace, cursorPosition);
  expect(action).toEqual({
    type: MOVE_CURSOR,
    payload: {
      workspaceLocation: playgroundWorkspace,
      cursorPosition
    }
  });
});

test('fetchChapter generates correct action object', () => {
  const action = fetchChapter();
  expect(action).toEqual({
    type: FETCH_CHAPTER
  });
});

test('changeChapter generates correct action object', () => {
  const chapter = 1;
  const variant = 'default';
  const action = changeChapter(chapter, variant);
  expect(action).toEqual({
    type: CHANGE_CHAPTER,
    payload: {
      chapter,
      variant
    }
  });
});

test('updateChapter generates correct action object', () => {
  const chapter = 1;
  const variant = 'default';
  const action = updateChapter(chapter, variant);
  expect(action).toEqual({
    type: UPDATE_CHAPTER,
    payload: {
      chapter,
      variant
    }
  });
});