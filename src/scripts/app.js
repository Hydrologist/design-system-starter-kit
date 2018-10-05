// Copyright (c) 2017-present, Salesforce.com, Inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

'use strict'

/**
 * These interactions are provided for prototyping use ONLY.
 *
 * Browser support, accessibility and security are not concerns in this prototype.
 * This is not aimed at being keyboard accessible or screen-reader friendly.
 * For these reasons, the JavaScript below is NOT for production use.
 */

const warningStyles = `
  color: #fff;
  background-color: #c23934;
  display: block;
  text-align: center;
  padding: 8px 32px;
  font: 100 16px/28px sans-serif;
  background-image: linear-gradient(45deg,rgba(0,0,0,.025) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.025) 50%,rgba(0,0,0,.025) 75%,transparent 75%,transparent);
  background-size: 64px 64px;
`
console.log('%c%s', warningStyles, 'Please do not use the provided JavaScript in production!')
console.log('Code in app.js is not built for accessibility, performance, or cross-browser compatibility.')

/**
 * Open / Close an element
 * @param {Node} element
 */
const toggle = (element) => element.classList.toggle('slds-is-open')

/**
 * Open / Close an element's parent
 * @param {Node} element
 */
const toggleParent = (element) => toggle(element.parentNode)

/**
 * Dropdown menus
 * https://www.lightningdesignsystem.com/components/menus/
 */
const dropdownButtons = document.querySelectorAll('.slds-dropdown-trigger_click > .slds-button')

Array.from(dropdownButtons)
  .forEach((button) =>
    button.addEventListener('click', (event) => toggleParent(event.currentTarget), false)
  )

/**
 * Tabs
 * https://www.lightningdesignsystem.com/components/tabs/
 */

const tabs = (variant) => document.querySelectorAll(`.slds-tabs_${variant} [role=tablist] [role=tab]`)
const tabActiveReset = (tab) => Array.from(tab.parentNode.parentNode.querySelectorAll('li'))
  .forEach((element) => element.classList.remove('slds-active'))
const tabActiveSet = (tab) => tab.parentNode.classList.add('slds-active')
const tabPanelsReset = (tab) => Array.from(tab.parentNode.parentNode.parentNode.querySelectorAll('[role="tabpanel"]'))
  .forEach((tabpanel) => {
    tabpanel.classList.remove('slds-show')
    tabpanel.classList.remove('slds-hide')
    tabpanel.classList.add('slds-hide')
  })
const tabPanelShow = (tab) => {
  const tabpanel = document.getElementById(tab.getAttribute('aria-controls'))
  tabpanel.classList.remove('slds-show')
  tabpanel.classList.remove('slds-hide')
  tabpanel.classList.add('slds-show')
}

const defaultTabs = tabs('default')
const scopedTabs = tabs('scoped')

const assignTabEvents = (event) => {
  tabActiveReset(event.currentTarget)
  tabActiveSet(event.currentTarget)
  tabPanelsReset(event.currentTarget)
  tabPanelShow(event.currentTarget)
}

Array.from(defaultTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})
Array.from(scopedTabs).forEach((tab) => {
  tab.addEventListener('click', assignTabEvents, false)
})

const ptclick = () => {
  document.getElementById("pt-tab").classList.add('slds-is-active');
  document.getElementById("pu-tab").classList.remove('slds-is-active');
  document.getElementById("sh-tab").classList.remove('slds-is-active');
  document.getElementById("tab-default-1").classList.add('slds-show');
  document.getElementById("tab-default-1").classList.remove('slds-hide');
  document.getElementById("tab-default-2").classList.add('slds-hide');
  document.getElementById("tab-default-2").classList.remove('slds-show');
  document.getElementById("tab-default-3").classList.add('slds-hide');
  document.getElementById("tab-default-3").classList.remove('slds-show');
}

const puclick = () => {
  document.getElementById("pt-tab").classList.remove('slds-is-active');
  document.getElementById("pu-tab").classList.add('slds-is-active');
  document.getElementById("sh-tab").classList.remove('slds-is-active');
  document.getElementById("tab-default-1").classList.remove('slds-show');
  document.getElementById("tab-default-1").classList.add('slds-hide');
  document.getElementById("tab-default-2").classList.remove('slds-hide');
  document.getElementById("tab-default-2").classList.add('slds-show');
  document.getElementById("tab-default-3").classList.add('slds-hide');
  document.getElementById("tab-default-3").classList.remove('slds-show');
}

const shclick = () => {
  document.getElementById("pt-tab").classList.remove('slds-is-active');
  document.getElementById("pu-tab").classList.remove('slds-is-active');
  document.getElementById("sh-tab").classList.add('slds-is-active');
  document.getElementById("tab-default-1").classList.remove('slds-show');
  document.getElementById("tab-default-1").classList.add('slds-hide');
  document.getElementById("tab-default-2").classList.add('slds-hide');
  document.getElementById("tab-default-2").classList.remove('slds-show');
  document.getElementById("tab-default-3").classList.remove('slds-hide');
  document.getElementById("tab-default-3").classList.add('slds-show');
}

const loremselect = () => {
  document.getElementById("lorem-pricing").classList.remove('slds-hide');
  document.getElementById("lorem-pricing").classList.add('slds-show');
  document.getElementById("generic-pricing").classList.remove('slds-show');
  document.getElementById("generic-pricing").classList.add('slds-hide');
  document.getElementById("upgrade-preview").classList.add('slds-hide');
  document.getElementById("upgrade-preview").classList.remove('slds-show');
  document.getElementById("recupgrade").classList.remove('recommended-button-active');
  document.getElementById("edit-hider").classList.remove('edit-hide');
}

const genericselect = () => {
  document.getElementById("lorem-pricing").classList.remove('slds-show');
  document.getElementById("lorem-pricing").classList.add('slds-hide');
  document.getElementById("generic-pricing").classList.remove('slds-hide');
  document.getElementById("generic-pricing").classList.add('slds-show');
  document.getElementById("upgrade-preview").classList.add('slds-hide');
  document.getElementById("upgrade-preview").classList.remove('slds-show');
  document.getElementById("recupgrade").classList.remove('recommended-button-active');
}

const upgradeselect = () => {
  document.getElementById("lorem-pricing").classList.add('slds-hide');
  document.getElementById("lorem-pricing").classList.remove('slds-show');
  document.getElementById("generic-pricing").classList.remove('slds-show');
  document.getElementById("generic-pricing").classList.add('slds-hide');
  document.getElementById("upgrade-preview").classList.remove('slds-hide');
  document.getElementById("upgrade-preview").classList.add('slds-show');
  document.getElementById("recupgrade").classList.add('recommended-button-active');
  document.getElementById("edit-hider").classList.add('edit-hide');
}

const manageclick = () => {
  document.getElementById("manage-button").classList.remove('slds-button_neutral');
  document.getElementById("manage-button").classList.add('slds-button_brand');
  document.getElementById("manage-page").classList.add('slds-show');
  document.getElementById("manage-page").classList.remove('slds-hide');
  document.getElementById("visualize-button").classList.remove('slds-button_brand');
  document.getElementById("visualize-button").classList.add('slds-button_neutral');
  document.getElementById("visualize-page").classList.remove('slds-show');
  document.getElementById("visualize-page").classList.add('slds-hide');
  document.getElementById("select-button").classList.remove('slds-button_brand');
  document.getElementById("select-button").classList.add('slds-button_neutral');
}

const visualizeclick = () => {
  document.getElementById("manage-button").classList.remove('slds-button_brand');
  document.getElementById("manage-button").classList.add('slds-button_neutral');
  document.getElementById("manage-page").classList.remove('slds-show');
  document.getElementById("manage-page").classList.add('slds-hide');
  document.getElementById("visualize-button").classList.remove('slds-button_neutral');
  document.getElementById("visualize-page").classList.add('slds-show');
  document.getElementById("visualize-page").classList.remove('slds-hide');
  document.getElementById("visualize-button").classList.add('slds-button_brand');
  document.getElementById("select-button").classList.remove('slds-button_brand');
  document.getElementById("select-button").classList.add('slds-button_neutral');
}

const v1select = () => {
  document.getElementById("loremline").classList.add('sub-timeline-active');
  document.getElementById("basketline").classList.remove('sub-timeline-active');
  document.getElementById("genericline").classList.remove('non-sub-timeline-active');
  document.getElementById("oppline").classList.remove('opportunity-timeline-active');
}

const v2select = () => {
  document.getElementById("loremline").classList.remove('sub-timeline-active');
  document.getElementById("basketline").classList.add('sub-timeline-active');
  document.getElementById("genericline").classList.remove('non-sub-timeline-active');
  document.getElementById("oppline").classList.remove('opportunity-timeline-active');
}

const v3select = () => {
  document.getElementById("loremline").classList.remove('sub-timeline-active');
  document.getElementById("basketline").classList.remove('sub-timeline-active');
  document.getElementById("genericline").classList.add('non-sub-timeline-active');
  document.getElementById("oppline").classList.remove('opportunity-timeline-active');
}

const oppselect = () => {
  document.getElementById("loremline").classList.remove('sub-timeline-active');
  document.getElementById("basketline").classList.remove('sub-timeline-active');
  document.getElementById("genericline").classList.remove('non-sub-timeline-active');
  document.getElementById("oppline").classList.add('opportunity-timeline-active');
}

const editunhide = () => {
  document.getElementById("edit-table").classList.add('slds-hide');
  document.getElementById("left-panel").classList.remove('slds-hide');
  document.getElementById("right-panel").classList.remove('slds-hide');
}