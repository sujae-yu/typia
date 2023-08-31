import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_misc_assertClone_TypeTagRange = _test_misc_assertClone(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
    ((input: any): typia.Resolved<TypeTagRange> => {
        const assert = (input: any): TypeTagRange => {
            const __is = (input: any): input is TypeTagRange => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Math.floor(input.greater) === input.greater &&
                    -2147483648 <= input.greater &&
                    input.greater <= 2147483647 &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Math.floor(input.greater_equal) === input.greater_equal &&
                    -2147483648 <= input.greater_equal &&
                    input.greater_equal <= 2147483647 &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Math.floor(input.less) === input.less &&
                    -2147483648 <= input.less &&
                    input.less <= 2147483647 &&
                    input.less < 7 &&
                    "number" === typeof input.less_equal &&
                    Math.floor(input.less_equal) === input.less_equal &&
                    -2147483648 <= input.less_equal &&
                    input.less_equal <= 2147483647 &&
                    input.less_equal <= 7 &&
                    "number" === typeof input.greater_less &&
                    Math.floor(input.greater_less) === input.greater_less &&
                    -2147483648 <= input.greater_less &&
                    input.greater_less <= 2147483647 &&
                    3 < input.greater_less &&
                    input.greater_less < 7 &&
                    "number" === typeof input.greater_equal_less &&
                    Math.floor(input.greater_equal_less) ===
                        input.greater_equal_less &&
                    -2147483648 <= input.greater_equal_less &&
                    input.greater_equal_less <= 2147483647 &&
                    3 <= input.greater_equal_less &&
                    input.greater_equal_less < 7 &&
                    "number" === typeof input.greater_less_equal &&
                    Math.floor(input.greater_less_equal) ===
                        input.greater_less_equal &&
                    -2147483648 <= input.greater_less_equal &&
                    input.greater_less_equal <= 2147483647 &&
                    3 < input.greater_less_equal &&
                    input.greater_less_equal <= 7 &&
                    "number" === typeof input.greater_equal_less_equal &&
                    Math.floor(input.greater_equal_less_equal) ===
                        input.greater_equal_less_equal &&
                    -2147483648 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 2147483647 &&
                    3 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 7 &&
                    "number" === typeof input.equal &&
                    Math.floor(input.equal) === input.equal &&
                    -2147483648 <= input.equal &&
                    input.equal <= 2147483647 &&
                    10 <= input.equal &&
                    input.equal <= 10;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TypeTagRange => {
                    const $guard = (typia.misc.assertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TypeTagRange.Type>",
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
                                            expected: "TypeTagRange.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TypeTagRange.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TypeTagRange.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.greater &&
                            ((Math.floor(input.greater) === input.greater &&
                                -2147483648 <= input.greater &&
                                input.greater <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater,
                                })) &&
                            (3 < input.greater ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3>)',
                                value: input.greater,
                            })) &&
                        (("number" === typeof input.greater_equal &&
                            ((Math.floor(input.greater_equal) ===
                                input.greater_equal &&
                                -2147483648 <= input.greater_equal &&
                                input.greater_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal,
                                })) &&
                            (3 <= input.greater_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3>)',
                                value: input.greater_equal,
                            })) &&
                        (("number" === typeof input.less &&
                            ((Math.floor(input.less) === input.less &&
                                -2147483648 <= input.less &&
                                input.less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: 'number & Type<"int32">',
                                    value: input.less,
                                })) &&
                            (input.less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMaximum<7>)',
                                value: input.less,
                            })) &&
                        (("number" === typeof input.less_equal &&
                            ((Math.floor(input.less_equal) ===
                                input.less_equal &&
                                -2147483648 <= input.less_equal &&
                                input.less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.less_equal,
                                })) &&
                            (input.less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected:
                                    '(number & Type<"int32"> & Maximum<7>)',
                                value: input.less_equal,
                            })) &&
                        (("number" === typeof input.greater_less &&
                            ((Math.floor(input.greater_less) ===
                                input.greater_less &&
                                -2147483648 <= input.greater_less &&
                                input.greater_less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_less,
                                })) &&
                            (3 < input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater_less,
                                })) &&
                            (input.greater_less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.greater_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
                                value: input.greater_less,
                            })) &&
                        (("number" === typeof input.greater_equal_less &&
                            ((Math.floor(input.greater_equal_less) ===
                                input.greater_equal_less &&
                                -2147483648 <= input.greater_equal_less &&
                                input.greater_equal_less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal_less,
                                })) &&
                            (3 <= input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal_less,
                                })) &&
                            (input.greater_equal_less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.greater_equal_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
                                value: input.greater_equal_less,
                            })) &&
                        (("number" === typeof input.greater_less_equal &&
                            ((Math.floor(input.greater_less_equal) ===
                                input.greater_less_equal &&
                                -2147483648 <= input.greater_less_equal &&
                                input.greater_less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_less_equal,
                                })) &&
                            (3 < input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater_less_equal,
                                })) &&
                            (input.greater_less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.greater_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
                                value: input.greater_less_equal,
                            })) &&
                        (("number" === typeof input.greater_equal_less_equal &&
                            ((Math.floor(input.greater_equal_less_equal) ===
                                input.greater_equal_less_equal &&
                                -2147483648 <= input.greater_equal_less_equal &&
                                input.greater_equal_less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (3 <= input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (input.greater_equal_less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.greater_equal_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
                                value: input.greater_equal_less_equal,
                            })) &&
                        (("number" === typeof input.equal &&
                            ((Math.floor(input.equal) === input.equal &&
                                -2147483648 <= input.equal &&
                                input.equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.equal,
                                })) &&
                            (10 <= input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number & Minimum<10>",
                                    value: input.equal,
                                })) &&
                            (input.equal <= 10 ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number & Maximum<10>",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
                                value: input.equal,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TypeTagRange",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagRange",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (input: TypeTagRange): typia.Resolved<TypeTagRange> => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647 &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647 &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647 &&
                input.less < 7 &&
                "number" === typeof input.less_equal &&
                Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647 &&
                input.less_equal <= 7 &&
                "number" === typeof input.greater_less &&
                Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647 &&
                3 < input.greater_less &&
                input.greater_less < 7 &&
                "number" === typeof input.greater_equal_less &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647 &&
                3 <= input.greater_equal_less &&
                input.greater_equal_less < 7 &&
                "number" === typeof input.greater_less_equal &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647 &&
                3 < input.greater_less_equal &&
                input.greater_less_equal <= 7 &&
                "number" === typeof input.greater_equal_less_equal &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647 &&
                3 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 7 &&
                "number" === typeof input.equal &&
                Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647 &&
                10 <= input.equal &&
                input.equal <= 10;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co1(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: Array.isArray(input.value)
                    ? $cp0(input.value)
                    : (input.value as any),
            });
            const $co1 = (input: any): any => ({
                greater: input.greater as any,
                greater_equal: input.greater_equal as any,
                less: input.less as any,
                less_equal: input.less_equal as any,
                greater_less: input.greater_less as any,
                greater_equal_less: input.greater_equal_less as any,
                greater_less_equal: input.greater_less_equal as any,
                greater_equal_less_equal: input.greater_equal_less_equal as any,
                equal: input.equal as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    })(input),
);