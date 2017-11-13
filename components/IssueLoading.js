import React from "react"
import format from 'date-fns/format';
import IssueToC from "./IssueToC"
import IssueContent from "./IssueContent"
import range from 'lodash/range';

export const buildCollection = template => count => range(0, count).map(i => template(i));

const linkTemplate = i => ({
  url: `http://scalatimes.com?q=${i}`,
  title: 'Lorem ipsum dolor sit amet, consectetur',
  description: 'Maecenas venenatis tortor et nulla fermentum faucibus. Integer rutrum volutpat justo, vitae elementum dolor aliquam quis. Proin quis ipsum nisi. Donec iaculis sodales dolor. Integer pulvinar viverra mauris, id vulputate elit posuere eget. Mauris vitae nulla a massa vestibulum luctus.',
  author: 'SoftwareMill'
});

const categoryTemplate = i => ({
  name: `Lorem ipsum ${i}`,
  date: new Date(),
  links: buildCollection(linkTemplate)(4)
});

const fakeIssue = {
  number: 123,
  date: format(new Date(), 'MMMM Do, YYYY'),
  categories: buildCollection(categoryTemplate)(2)
};

export default () => {
  const {number, categories, date} = fakeIssue;
  return (
    <div className="issue issue--loading loading-animation">
      <div className="issue__header">
        <h2><span>#{number}</span></h2>
        <h4>
          <span>{date}</span>
        </h4>
        <IssueToC names={categories.map((cat) => cat.name)} />
      </div>
      <IssueContent categories={categories} />
    </div>
  )
}