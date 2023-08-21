import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_protobuf_assertEncode_ObjectUnionCompositePointer =
    _test_protobuf_assertEncode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ObjectUnionCompositePointer => {
                    const __is = (
                        input: any,
                    ): input is ObjectUnionCompositePointer => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            $iu0(input.value);
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.x &&
                            Number.isFinite(input.x) &&
                            "number" === typeof input.y &&
                            Number.isFinite(input.y);
                        const $io3 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            "number" === typeof (input.p1 as any).x &&
                            Number.isFinite((input.p1 as any).x) &&
                            "number" === typeof (input.p1 as any).y &&
                            Number.isFinite((input.p1 as any).y) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            "number" === typeof (input.p2 as any).x &&
                            Number.isFinite((input.p2 as any).x) &&
                            "number" === typeof (input.p2 as any).y &&
                            Number.isFinite((input.p2 as any).y);
                        const $io4 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            "number" === typeof (input.p1 as any).x &&
                            Number.isFinite((input.p1 as any).x) &&
                            "number" === typeof (input.p1 as any).y &&
                            Number.isFinite((input.p1 as any).y) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            "number" === typeof (input.p2 as any).x &&
                            Number.isFinite((input.p2 as any).x) &&
                            "number" === typeof (input.p2 as any).y &&
                            Number.isFinite((input.p2 as any).y) &&
                            "object" === typeof input.p3 &&
                            null !== input.p3 &&
                            "number" === typeof (input.p3 as any).x &&
                            Number.isFinite((input.p3 as any).x) &&
                            "number" === typeof (input.p3 as any).y &&
                            Number.isFinite((input.p3 as any).y);
                        const $io5 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            "number" === typeof (input.p1 as any).x &&
                            Number.isFinite((input.p1 as any).x) &&
                            "number" === typeof (input.p1 as any).y &&
                            Number.isFinite((input.p1 as any).y) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            "number" === typeof (input.p2 as any).x &&
                            Number.isFinite((input.p2 as any).x) &&
                            "number" === typeof (input.p2 as any).y &&
                            Number.isFinite((input.p2 as any).y) &&
                            "object" === typeof input.p3 &&
                            null !== input.p3 &&
                            "number" === typeof (input.p3 as any).x &&
                            Number.isFinite((input.p3 as any).x) &&
                            "number" === typeof (input.p3 as any).y &&
                            Number.isFinite((input.p3 as any).y) &&
                            "object" === typeof input.p4 &&
                            null !== input.p4 &&
                            "number" === typeof (input.p4 as any).x &&
                            Number.isFinite((input.p4 as any).x) &&
                            "number" === typeof (input.p4 as any).y &&
                            Number.isFinite((input.p4 as any).y);
                        const $io6 = (input: any): boolean =>
                            Array.isArray(input.points) &&
                            input.points.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            );
                        const $io7 = (input: any): boolean =>
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io6(input.outer) &&
                            Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io6(elem),
                            );
                        const $io8 = (input: any): boolean =>
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ) &&
                            "object" === typeof input.inner &&
                            null !== input.inner &&
                            "number" === typeof (input.inner as any).x &&
                            Number.isFinite((input.inner as any).x) &&
                            "number" === typeof (input.inner as any).y &&
                            Number.isFinite((input.inner as any).y);
                        const $io9 = (input: any): boolean =>
                            "object" === typeof input.centroid &&
                            null !== input.centroid &&
                            "number" === typeof (input.centroid as any).x &&
                            Number.isFinite((input.centroid as any).x) &&
                            "number" === typeof (input.centroid as any).y &&
                            Number.isFinite((input.centroid as any).y) &&
                            "number" === typeof input.radius &&
                            Number.isFinite(input.radius);
                        const $iu0 = (input: any): any =>
                            (() => {
                                if (undefined !== input.x) return $io2(input);
                                else if (undefined !== input.p4)
                                    return $io5(input);
                                else if (undefined !== input.points)
                                    return $io6(input);
                                else if (
                                    Array.isArray(input.outer) &&
                                    input.outer.every(
                                        (elem: any) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            $io2(elem),
                                    )
                                )
                                    return $io8(input);
                                else if (
                                    "object" === typeof input.outer &&
                                    null !== input.outer &&
                                    $io6(input.outer)
                                )
                                    return $io7(input);
                                else if (undefined !== input.centroid)
                                    return $io9(input);
                                else
                                    return (() => {
                                        if (undefined !== input.p3)
                                            return $io4(input);
                                        else return $io3(input);
                                    })();
                            })();
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectUnionCompositePointer => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                                        value: input.value,
                                    })) &&
                                    input.value.every(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                                        value: input.value,
                                    })) &&
                                    $au0(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                                    value: input.value,
                                });
                            const $ao2 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    })) &&
                                (("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    }));
                            const $ao3 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $ao2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                (((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $ao2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    }));
                            const $ao4 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $ao2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                (((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $ao2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                (((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $ao2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    }));
                            const $ao5 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $ao2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                (((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $ao2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                (((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $ao2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    })) &&
                                (((("object" === typeof input.p4 &&
                                    null !== input.p4) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p4,
                                    })) &&
                                    $ao2(
                                        input.p4,
                                        _path + ".p4",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p4,
                                    }));
                            const $ao6 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.points) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.points,
                                    })) &&
                                    input.points.every(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPoint",
                                                    value: elem,
                                                })) &&
                                                $ao2(
                                                    elem,
                                                    _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionCompositePointer.IPoint",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<ObjectUnionCompositePointer.IPoint>",
                                    value: input.points,
                                });
                            const $ao7 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.outer &&
                                    null !== input.outer) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionCompositePointer.IPolyline",
                                        value: input.outer,
                                    })) &&
                                    $ao6(
                                        input.outer,
                                        _path + ".outer",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionCompositePointer.IPolyline",
                                        value: input.outer,
                                    })) &&
                                (((Array.isArray(input.inner) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPolyline>",
                                        value: input.inner,
                                    })) &&
                                    input.inner.every(
                                        (elem: any, _index3: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPolyline",
                                                    value: elem,
                                                })) &&
                                                $ao6(
                                                    elem,
                                                    _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionCompositePointer.IPolyline",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPolyline>",
                                        value: input.inner,
                                    }));
                            const $ao8 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((Array.isArray(input.outer) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.outer,
                                    })) &&
                                    input.outer.every(
                                        (elem: any, _index4: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".outer[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPoint",
                                                    value: elem,
                                                })) &&
                                                $ao2(
                                                    elem,
                                                    _path +
                                                        ".outer[" +
                                                        _index4 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".outer[" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionCompositePointer.IPoint",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.outer,
                                    })) &&
                                (((("object" === typeof input.inner &&
                                    null !== input.inner) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.inner,
                                    })) &&
                                    $ao2(
                                        input.inner,
                                        _path + ".inner",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.inner,
                                    }));
                            const $ao9 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.centroid,
                                    })) &&
                                    $ao2(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.centroid,
                                    })) &&
                                (("number" === typeof input.radius &&
                                    Number.isFinite(input.radius)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".radius",
                                        expected: "number",
                                        value: input.radius,
                                    }));
                            const $au0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): any =>
                                (() => {
                                    if (undefined !== input.x)
                                        return $ao2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else if (undefined !== input.p4)
                                        return $ao5(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else if (undefined !== input.points)
                                        return $ao6(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else if (
                                        Array.isArray(input.outer) &&
                                        input.outer.every(
                                            (elem: any, _index5: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $ao2(
                                                    elem,
                                                    _path +
                                                        ".outer[" +
                                                        _index5 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                    )
                                        return $ao8(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else if (
                                        "object" === typeof input.outer &&
                                        null !== input.outer &&
                                        $ao6(
                                            input.outer,
                                            _path + ".outer",
                                            false && _exceptionable,
                                        )
                                    )
                                        return $ao7(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else if (undefined !== input.centroid)
                                        return $ao9(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else
                                        return (() => {
                                            if (undefined !== input.p3)
                                                return $ao4(
                                                    input,
                                                    _path,
                                                    true && _exceptionable,
                                                );
                                            else
                                                return $ao3(
                                                    input,
                                                    _path,
                                                    true && _exceptionable,
                                                );
                                        })();
                                })();
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectUnionCompositePointer",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionCompositePointer",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (
                    input: ObjectUnionCompositePointer,
                ): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "value";
                            if (0 !== input.value.length) {
                                for (const elem of input.value) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo1 = (input: any): any => {
                            // property "value";
                            if (undefined !== input.value.x)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo2(input.value);
                                    writer.ldelim();
                                })();
                            else if (undefined !== input.value.p4)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo5(input.value);
                                    writer.ldelim();
                                })();
                            else if (undefined !== input.value.points)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo6(input.value);
                                    writer.ldelim();
                                })();
                            else if (
                                Array.isArray(input.value.outer) &&
                                input.value.outer.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io2(elem),
                                )
                            )
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo8(input.value);
                                    writer.ldelim();
                                })();
                            else if (
                                "object" === typeof input.value.outer &&
                                null !== input.value.outer &&
                                $io6(input.value.outer)
                            )
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo7(input.value);
                                    writer.ldelim();
                                })();
                            else if (undefined !== input.value.centroid)
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo9(input.value);
                                    writer.ldelim();
                                })();
                            else
                                return (() => {
                                    if (undefined !== input.value.p3)
                                        return (() => {
                                            writer.uint32(10);
                                            writer.fork();
                                            $peo4(input.value);
                                            writer.ldelim();
                                        })();
                                    else
                                        return (() => {
                                            writer.uint32(10);
                                            writer.fork();
                                            $peo3(input.value);
                                            writer.ldelim();
                                        })();
                                })();
                        };
                        const $peo2 = (input: any): any => {
                            // property "x";
                            writer.uint32(9);
                            writer.double(input.x);
                            // property "y";
                            writer.uint32(17);
                            writer.double(input.y);
                        };
                        const $peo3 = (input: any): any => {
                            // property "p1";
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.p1);
                            writer.ldelim();
                            // property "p2";
                            writer.uint32(18);
                            writer.fork();
                            $peo2(input.p2);
                            writer.ldelim();
                        };
                        const $peo4 = (input: any): any => {
                            // property "p1";
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.p1);
                            writer.ldelim();
                            // property "p2";
                            writer.uint32(18);
                            writer.fork();
                            $peo2(input.p2);
                            writer.ldelim();
                            // property "p3";
                            writer.uint32(26);
                            writer.fork();
                            $peo2(input.p3);
                            writer.ldelim();
                        };
                        const $peo5 = (input: any): any => {
                            // property "p1";
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.p1);
                            writer.ldelim();
                            // property "p2";
                            writer.uint32(18);
                            writer.fork();
                            $peo2(input.p2);
                            writer.ldelim();
                            // property "p3";
                            writer.uint32(26);
                            writer.fork();
                            $peo2(input.p3);
                            writer.ldelim();
                            // property "p4";
                            writer.uint32(34);
                            writer.fork();
                            $peo2(input.p4);
                            writer.ldelim();
                        };
                        const $peo6 = (input: any): any => {
                            // property "points";
                            if (0 !== input.points.length) {
                                for (const elem of input.points) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo2(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo7 = (input: any): any => {
                            // property "outer";
                            writer.uint32(10);
                            writer.fork();
                            $peo6(input.outer);
                            writer.ldelim();
                            // property "inner";
                            if (0 !== input.inner.length) {
                                for (const elem of input.inner) {
                                    writer.uint32(18);
                                    writer.fork();
                                    $peo6(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo8 = (input: any): any => {
                            // property "outer";
                            if (0 !== input.outer.length) {
                                for (const elem of input.outer) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo2(elem);
                                    writer.ldelim();
                                }
                            }
                            // property "inner";
                            writer.uint32(18);
                            writer.fork();
                            $peo2(input.inner);
                            writer.ldelim();
                        };
                        const $peo9 = (input: any): any => {
                            // property "centroid";
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.centroid);
                            writer.ldelim();
                            // property "radius";
                            writer.uint32(17);
                            writer.double(input.radius);
                        };
                        const $io1 = (input: any): boolean =>
                            "object" === typeof input.value &&
                            null !== input.value &&
                            $iu0(input.value);
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.x &&
                            "number" === typeof input.y;
                        const $io3 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            $io2(input.p1) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            $io2(input.p2);
                        const $io4 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            $io2(input.p1) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            $io2(input.p2) &&
                            "object" === typeof input.p3 &&
                            null !== input.p3 &&
                            $io2(input.p3);
                        const $io5 = (input: any): boolean =>
                            "object" === typeof input.p1 &&
                            null !== input.p1 &&
                            $io2(input.p1) &&
                            "object" === typeof input.p2 &&
                            null !== input.p2 &&
                            $io2(input.p2) &&
                            "object" === typeof input.p3 &&
                            null !== input.p3 &&
                            $io2(input.p3) &&
                            "object" === typeof input.p4 &&
                            null !== input.p4 &&
                            $io2(input.p4);
                        const $io6 = (input: any): boolean =>
                            Array.isArray(input.points) &&
                            input.points.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            );
                        const $io7 = (input: any): boolean =>
                            "object" === typeof input.outer &&
                            null !== input.outer &&
                            $io6(input.outer) &&
                            Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io6(elem),
                            );
                        const $io8 = (input: any): boolean =>
                            Array.isArray(input.outer) &&
                            input.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            ) &&
                            "object" === typeof input.inner &&
                            null !== input.inner &&
                            $io2(input.inner);
                        const $io9 = (input: any): boolean =>
                            "object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io2(input.centroid) &&
                            "number" === typeof input.radius;
                        const $iu0 = (input: any): any =>
                            (() => {
                                if (undefined !== input.x) return $io2(input);
                                else if (undefined !== input.p4)
                                    return $io5(input);
                                else if (undefined !== input.points)
                                    return $io6(input);
                                else if (
                                    Array.isArray(input.outer) &&
                                    input.outer.every(
                                        (elem: any) =>
                                            "object" === typeof elem &&
                                            null !== elem &&
                                            $io2(elem),
                                    )
                                )
                                    return $io8(input);
                                else if (
                                    "object" === typeof input.outer &&
                                    null !== input.outer &&
                                    $io6(input.outer)
                                )
                                    return $io7(input);
                                else if (undefined !== input.centroid)
                                    return $io9(input);
                                else
                                    return (() => {
                                        if (undefined !== input.p3)
                                            return $io4(input);
                                        else return $io3(input);
                                    })();
                            })();
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectUnionCompositePointer {\n    repeated IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_ value = 1;\n    message IPoint {\n        required double x = 1;\n        required double y = 2;\n    }\n\n    message ILine {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n    }\n\n    message ITriangle {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n        required ObjectUnionCompositePointer.IPoint p3 = 3;\n    }\n\n    message IRectangle {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n        required ObjectUnionCompositePointer.IPoint p3 = 3;\n        required ObjectUnionCompositePointer.IPoint p4 = 4;\n    }\n\n    message IPolyline {\n        repeated ObjectUnionCompositePointer.IPoint points = 1;\n    }\n\n    message IPolygon {\n        required ObjectUnionCompositePointer.IPolyline outer = 1;\n        repeated ObjectUnionCompositePointer.IPolyline inner = 2;\n    }\n\n    message IPointedShape {\n        repeated ObjectUnionCompositePointer.IPoint outer = 1;\n        required ObjectUnionCompositePointer.IPoint inner = 2;\n    }\n\n    message ICircle {\n        required ObjectUnionCompositePointer.IPoint centroid = 1;\n        required double radius = 2;\n    }\n}\n\nmessage IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_ {\n    oneof value {\n        ObjectUnionCompositePointer.IPoint v1 = 1;\n        ObjectUnionCompositePointer.ILine v2 = 2;\n        ObjectUnionCompositePointer.ITriangle v3 = 3;\n        ObjectUnionCompositePointer.IRectangle v4 = 4;\n        ObjectUnionCompositePointer.IPolyline v5 = 5;\n        ObjectUnionCompositePointer.IPointedShape v6 = 6;\n        ObjectUnionCompositePointer.IPolygon v7 = 7;\n        ObjectUnionCompositePointer.ICircle v8 = 8;\n    }\n}',
    });