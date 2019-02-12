import React, { Component } from 'react'

export default class SuggestAnImprovement extends Component {
  render() {
    return (
      <div>
          SUGGEST AN IMPROVEMENT

          Notes on Suggest an Improvement:

- There should be a form to submit suggestions
- a voting system would be cool - vote up / down
- comment on suggestions
- must be signed in to make a suggestion
- all suggestions are posted
- search suggestions
- earn ‘karma points on suggestions implemented’ - i’ll explain karma points later
        

USER STORIES

As a user I want to be able to suggest to local hire improvements they could make that would make my experience as a borrower on this site more enjoyable

As a lender I want to be able to suggest to local hire improvements they could make that would make my experience as a lender on this site more enjoyable.

As local hire we want to find out what improvements our users want on our site so that we are able to provide everyone with a better overall experience.

MAILERS

1) Thankyou for your suggestion
2) Someone has commented on your suggestion
3) The status of your suggestion has been updated (public, closed, implemented, etc)
4) - later - congrats, people loved your idea so we implemented it, as a thankyou we have awarded you with # of karma points.

      </div>
    )
  }
}
