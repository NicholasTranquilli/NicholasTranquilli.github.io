---
layout: post
title:  "Introduction to my custom ASM language"
date:   2023-09-18 21:22:08 -400
categories: "Lob-Assembly-Language"
repository:
post-category-number: 1
---

This is a custom assembly language of mine that will be the basis of an actual language I will be developing.
This language is not meant to develop into anything particularly innovative, I was simply inspired by the MIPS assembly language as well as several others and wanted to make something that could keep the simplicity of MIPS while also improving it.
Since there is no computer or operating system that understands my custom language, I will be creating an emulator as a part of this project.
Below is a simple program outline as well as details about how this language will be encoded into binary form.

```java
    // DEMO 1 CODE

    // Encoding (first draft)
    // (4 byte)         R / FR: | TYPE 2 |  OP 6  |  RD 4  |  R1 4  |  R2 4  | RESERVED 12 |
    // (2 byte + Size)  I / FI: | TYPE 2 |  OP 6  |  RD 4  | SIZE 4 |  IMMEDIATE DATA ...  |
    // (4 byte)         J:  | TYPE 2 |                   ADDRESS  30                   |

    // Type is 0 J instruction
    // Type is 1 R instruction
    // Type is 2 I instruction

    // Registers (Not case sensitive)
    // lp   - location pointer              (0)
    // ra   - return address                (1)
    // s    - syscall registers             (2)
    // p    - param registers               (3 - 6)
    // r    - general registers             (7 - 15)

    // ALL REGISTERS FUNCTION AS POINTERS

    // ********** EXAMPLE **********
    // mov $r0[4], $r1[-2]
    //
    // THIS TRANSLATES TO: (C/C++ code)
    //
    // int* r0 = new int;
    // int* r1 = new int;
    //
    // r0 = r0 + 4; // $r0[4]
    // r0 = r1 - 2; // $r0[4] = $r1[-2]
    // r0 = r0 - 4; // set r0 back to starting point
   
    // Starting locations
    // .text starting location 0x000000000
    // .data starting location 0x0F0000000
    // no other . sections are allowed

    // LIST OF SYSCALLS ($s values):
    // 0    - exit program
    // 1    - print value in p0

.data
    i8      a = 0       // Char / Byte
    i16     b = 0       // Short
    i32     c = 0       // Int
    i64     d = 0       // Long
    f32     e = 0.0f    // Float
    f64     f = 0.1     // Double
    str     g = "abc"   // String (null-terminated)

.text
@main
    mov $p1, 1          // p1 = 1

    add $p0, $p1, 1     // p0 = 2
    add $r0, $p0, $p1   // p0 = 3

    mov $p0, $r0        // move r0 into p0
    mov $s, 1           // print contents in p0
    syscall
       
    jmp end             // jump
       
    // THIS SHOULD BE SKIPPED WITH THE JMP INSTRUCTION
       
    lsh $r0, $r0, 1     // left shift r0 by 1, store in r0
    mov $r1, 1          // move 1 into r1
    rsh $r0, $r0, $r1   // right shift t0 by contents in r1, store in r0

    mov $p0, $r0        // move r0 into p0
    mov $s, 1           // print contents in p0
    syscall

    // JMP END GOES TO HERE
       
@end
    mov $s, 0           // exit
    syscall
```

You may notice that this resembles MIPS quite closely, however one already visible improvement is that the instruction type (such as ADD vs ADDI) will be determined automatically by the assembler and thus there is no need to specify ADD vs ADDI anymore.

Many changes and optimizations will be made in the future but this demo provides a rough idea of what should be expected from this language.