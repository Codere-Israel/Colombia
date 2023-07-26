import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function TableOfContents(props) {
    const [activeId, setActiveId] = useState();

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        },
        { rootMargin: "-50% 0px", threshold: 0 }
    );

    useEffect(() => {
        const { table } = props;
        const refs = table.map(({ id }) => {
            const ref = document.querySelector(`#${id}`);
            if (ref) {
                observer.observe(ref);
            }
            return ref;
        });

        return () => {
            refs.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [observer, props]);

    const [offset, setOffset] = useState(300); // Высота navbar по умолчанию

    useEffect(() => {
        const navbarElement = document.querySelector('.navbar');
        if (navbarElement) {
            setOffset(navbarElement.offsetHeight);
        } else {
            console.error('Navbar element not found');
        }
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            window.scrollTo({ top: absoluteElementTop - offset, behavior: 'smooth' });
        } else {
            console.error(`Element with id ${id} not found.`);
        }
    };


    const link = (instance) => {
        return (
            <div className={`_tx flexed-centered ${activeId === instance.id ? "active" : ""}`} onClick={() => handleScroll(instance.id)}>
                <Nav.Link href={`#${instance.id}`} style={{cursor: 'pointer'}}>
                    <i></i>
                    {instance.title}
                </Nav.Link>
            </div>
        );
    };

    const regTable = () => {
        return (
            <Container>
                {props.table.map((t, k) => (
                    <div key={k}>
                        {link(t)}
                        {t.inner ? (
                            <>
                                {t.inner.map((i, k) => (
                                    <Container  key={k}>{link(i)}</Container>
                                ))}
                            </>
                        ) : null}
                    </div>
                ))}
            </Container>
        );
    };

    const formulaTable = () => {
        return (
            <Row>
                {props.table.map((t, k) => (
                    <Col key={k}>
                        {link(t)}
                        {t.inner ? (
                            <>
                                {t.inner.map((i, k) => (
                                    <Container className="formulaTable" key={k}>
                                        {link(i)}
                                    </Container>
                                ))}
                            </>
                        ) : null}
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <div className="content-table mt-4">
      <span style={{ fontSize: "1.35rem" }} className="subtitle">
        Tabla de contenidos:
      </span>
            {props.isFormula ? formulaTable() : regTable()}
        </div>
    );
}
