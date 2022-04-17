import React from 'react';
import {Form} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';

export default function SearchBox() {
    return(
        <div>
            <Form className="search-box d-flex">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-warning search-btn" type="submit"><BsSearch/></button>
            </Form>
            </div>
    )

}



