import React, { Fragment } from 'react';

import Table from './table/table';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import { connect } from 'react-redux';
import { sortedListSelector } from './selectors/listSelector';

import * as ListActions from './actions/listActions';

interface State {}
interface Props {
    data: Array<any>;
    loadData: () => void;
    updateSortField: (field: string) => void;
  };

class Demo extends React.Component<Props, State> {
    state: State = {};

    static defaultProps ={
        data: [],
      };

    componentWillMount() {
        this.props.loadData();
    }
    
    onSort = (e) => {
        const field = e.target.dataset.sortField;
        this.props.updateSortField(field);
    }

    render() {
        const { data, loading } = this.props;

        return (
            <Fragment>
                <Table>
                    <TableHeader>
                        <div className='text-center pointer-cursor'data-sort-field="name" onClick={this.onSort}>Name</div>
                        <div className='text-center pointer-cursor' data-sort-field="created" onClick={this.onSort}>Created At</div>
                    </TableHeader>
                    {data.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <div>{row.name}</div>
                                <div>{row.created.toString()}</div>
                            </TableRow>
                        );
                    })}
                </Table>
                {loading && <div className="text-center">Loading the data</div>}
            </Fragment>
        );
    }
}

const actions = {
    updateSortField: ListActions.updateSortField,
    loadData: ListActions.loadList,
  };
  
  function mapStateToProps(state) {
    return {
      data: sortedListSelector(state),
      loading: state.list.loading,
      sortField: state.list.sortField,
      sortDirection: state.list.sortDirection,
    };
  }
  
  export default connect(mapStateToProps, actions)(Demo);