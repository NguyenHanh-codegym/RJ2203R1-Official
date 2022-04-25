const { render } = require("@testing-library/react");
const { Component } = require("react");

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                { id: 1, name: 'Nguyễn Văn A', age: 21, email: 'Anguyenvan@email.com' },
                { id: 2, name: 'Nguyễn Văn B', age: 19, email: 'Bnguyenvan@email.com' },
                { id: 3, name: 'Nguyễn Văn C', age: 16, email: 'Cnguyenvan@email.com' },
                { id: 4, name: 'Nguyễn Văn D', age: 25, email: 'Dnguyenvan@email.com' },
            ]
        }
    }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
     renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    render() {
        return (
            <div>
                <h1 id="title">Students List Table</h1>
                <table id='students'>
               <tbody>
               <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
    }
}

export default Table;