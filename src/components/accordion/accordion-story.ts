/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import './accordion';
import './accordion-item';
import storyDocs from './accordion-story.mdx';

const noop = () => {};

export const defaultStory = ({ parameters }) => {
  const { open, titleText, disableToggle, onBeforeToggle = noop, onToggle = noop } = parameters?.props?.['bx-accordion'] ?? {};
  const handleBeforeToggle = (event: CustomEvent) => {
    onBeforeToggle(event);
    if (disableToggle) {
      event.preventDefault();
    }
  };
  return html`
    <bx-accordion @bx-accordion-item-beingtoggled="${handleBeforeToggle}" @bx-accordion-item-toggled="${onToggle}">
      <bx-accordion-item ?open="${open}" title-text=${titleText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </bx-accordion-item>
      <bx-accordion-item ?open="${open}" title-text=${titleText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </bx-accordion-item>
      <bx-accordion-item ?open="${open}">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <span slot="title">${titleText}</span>
      </bx-accordion-item>
    </bx-accordion>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export default {
  title: 'Accordion',
  parameters: {
    docs: {
      page: storyDocs,
    },
    knobs: {
      'bx-accordion': () => ({
        open: boolean('Open the section (open)', false),
        titleText: text('The title (title-text)', 'Section title'),
        disableToggle: boolean(
          'Disable user-initiated toggle action (Call event.preventDefault() in bx-accordion-beingtoggled event)',
          false
        ),
        onBeforeToggle: action('bx-accordion-item-beingtoggled'),
        onToggle: action('bx-accordion-item-toggled'),
      }),
    },
  },
};
