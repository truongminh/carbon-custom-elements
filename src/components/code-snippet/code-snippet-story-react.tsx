/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-custom-elements` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXCodeSnippet from 'carbon-custom-elements/es/components-react/code-snippet/code-snippet';
// @ts-ignore
import BXCodeSnippetSkeleton from 'carbon-custom-elements/es/components-react/code-snippet/code-snippet-skeleton';
import {
  singleLine as baseSingleLine,
  multiLine as baseMultiLine,
  inline as baseInline,
  skeletonSingleLine as baseSkeletonSingleLine,
  skeletonMultiLine as baseSkeletonMultiLine,
} from './code-snippet-story';

export { default } from './code-snippet-story';

export const singleLine = ({ parameters }) => {
  const {
    codeAssistiveText,
    copyButtonAssistiveText,
    copyButtonFeedbackText,
    copyButtonFeedbackTimeout,
    onClick,
  } = parameters?.props?.['bx-code-snippet'];
  return (
    <BXCodeSnippet
      codeAssistiveText={codeAssistiveText}
      copyButtonAssistiveText={copyButtonAssistiveText}
      copyButtonFeedbackText={copyButtonFeedbackText || undefined}
      copyButtonFeedbackTimeout={copyButtonFeedbackTimeout}
      onClick={onClick}>
      {'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, ' +
        'quasi itaque alias, architecto hic, dicta fugit? ' +
        'Debitis delectus quidem explicabo vitae fuga laboriosam!'}
    </BXCodeSnippet>
  );
};

singleLine.story = baseSingleLine.story;

export const multiLine = ({ parameters }) => {
  const {
    codeAssistiveText,
    copyButtonAssistiveText,
    copyButtonFeedbackText,
    copyButtonFeedbackTimeout,
    collapseButtonText,
    expandButtonText,
    onClick,
  } = parameters?.props?.['bx-code-snippet'];
  return (
    <BXCodeSnippet
      type="multi"
      codeAssistiveText={codeAssistiveText}
      copyButtonAssistiveText={copyButtonAssistiveText}
      copyButtonFeedbackText={copyButtonFeedbackText || undefined}
      copyButtonFeedbackTimeout={copyButtonFeedbackTimeout}
      collapseButtonText={collapseButtonText}
      expandButtonText={expandButtonText}
      onClick={onClick}>{`@mixin grid-container {
width: 100%;
padding-right: padding(mobile);
padding-left: padding(mobile);

@include breakpoint(bp--xs--major) {
padding-right: padding(xs);
padding-left: padding(xs);
}
}

$z-indexes: (
modal : 9000,
overlay : 8000,
dropdown : 7000,
header : 6000,
footer : 5000,
hidden : - 1,
overflowHidden: - 1,
floating: 10000
);`}</BXCodeSnippet>
  );
};

multiLine.story = baseMultiLine.story;

export const inline = ({ parameters }) => {
  const {
    codeAssistiveText,
    copyButtonAssistiveText,
    copyButtonFeedbackText,
    copyButtonFeedbackTimeout,
    onClick,
  } = parameters?.props?.['bx-code-snippet'];
  return (
    <BXCodeSnippet
      type="inline"
      codeAssistiveText={codeAssistiveText}
      copyButtonAssistiveText={copyButtonAssistiveText}
      copyButtonFeedbackText={copyButtonFeedbackText || undefined}
      copyButtonFeedbackTimeout={copyButtonFeedbackTimeout}
      onClick={onClick}>
      node -v
    </BXCodeSnippet>
  );
};

export const skeletonSingleLine = () => <BXCodeSnippetSkeleton type="single" />;

skeletonSingleLine.story = baseSkeletonSingleLine.story;

export const skeletonMultiLine = () => <BXCodeSnippetSkeleton type="multi" />;

skeletonMultiLine.story = baseSkeletonMultiLine.story;

inline.story = baseInline.story;
