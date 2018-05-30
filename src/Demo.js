import React, { Fragment } from 'react';

import Table from './table/table';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import { connect } from 'react-redux';
import { sortedListSelector } from './selectors/listSelector';

import * as ListActions from './actions/listActions';

interface State {}
interface Props {
    darkTheme?: boolean;
    data: Array<any>;
    loadData: () => void;
    updateSortField: (field: string) => void;
  };

class Demo extends React.PureComponent<Props, State> {
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
    
    toggleTheme = () => {
        this.props.updateTheme(!this.props.darkTheme);
    }

    render() {
        const { data, loading, darkTheme } = this.props;
        console.log('Demo re-rendered');
        return (
            <Fragment>
                <div className="button-group">
                    <h3>Trigger a re-render on Demo</h3>
                    <button className='primary' onClick={this.toggleTheme}>Toggle theme</button>
                </div>
                <Table dark={darkTheme}>
                    <TableHeader dark={darkTheme}>
                        <div className='text-center pointer-cursor' data-sort-field="name" onClick={this.onSort}>Name</div>
                        <div className='text-center pointer-cursor' data-sort-field="created" onClick={this.onSort}>Created At</div>
                    </TableHeader>
                    {loading && 
                        <TableRow dark={darkTheme}>
                            <td className="text-center" colSpan={10}>Loading the data</td>
                        </TableRow>
                    }
                    {data.map(row => {
                        return (
                            <TableRow key={row.id} dark={darkTheme}>
                                <div>{row.name}</div>
                                <div>{row.created.toString()}</div>
                            </TableRow>
                        );
                    })}
                </Table>
            </Fragment>
        );
    }
}

const actions = {
    updateSortField: ListActions.updateSortField,
    loadData: ListActions.loadList,
    updateTheme: ListActions.updateTheme,
  };
  
  function mapStateToProps(state) {
    console.log('Demo mapStateToProps called');
    return {
      data: sortedListSelector(state),
      loading: state.list.loading,
      darkTheme: state.list.darkTheme,
    };
  }
  
  export default connect(mapStateToProps, actions)(Demo);