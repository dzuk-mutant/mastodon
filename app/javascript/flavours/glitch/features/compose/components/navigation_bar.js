import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar from 'flavours/glitch/components/avatar';
import Permalink from 'flavours/glitch/components/permalink';
import { FormattedMessage } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { profileLink } from 'flavours/glitch/util/backend_links';

export default class NavigationBar extends ImmutablePureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  render () {
    return (
      <div className='drawer--account'>
        <Permalink className='avatar' href={this.props.account.get('url')} to={`/accounts/${this.props.account.get('id')}`}>
          <span style={{ display: 'none' }}>{this.props.account.get('acct')}</span>
          <Avatar account={this.props.account} size={40} />
        </Permalink>

        <Permalink className='acct' href={this.props.account.get('url')} to={`/accounts/${this.props.account.get('id')}`}>
          <strong>@{this.props.account.get('acct')}</strong>
        </Permalink>

        { profileLink !== undefined && (
          <a
            className='edit'
            href={ profileLink }
          ><FormattedMessage id='navigation_bar.edit_profile' defaultMessage='Edit profile' /></a>
        )}
      </div>
    );
  };
}
