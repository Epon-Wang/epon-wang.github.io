---
layout: page
title: Acrobatic 2D Quadrotor
description: Course Project of ROB-GY 6323, a Sequential Quadratic Programming (SQP) solver for a 2D quadrotor to perform flipping
img: assets/img/quadrotor.png
importance: 2
category: 2025
related_publications: false
---

***
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![QPSolvers](https://img.shields.io/badge/qpsolvers-dcdcdc?style=for-the-badge)

***


<img src="3flips.gif" alt="quadrotor" style="display:block;margin:0 auto;max-width:67%;height:auto;" />

#### **Quadrotor System Dynamics**

<img src="quadrotor.png" alt="quadrotor" style="display:block;margin:0 auto;max-width:30%;height:auto;" />

$$
\dot{x} = f(x, u)

\left\{
\begin{aligned} 
\dot{p_x} &= v_x \\
m\dot{v}_x &= -(u_1 + u_2) \sin \theta \\ 
\dot{p_y} &= v_y\\
m\dot{v}_y &= (u_1 + u_2) \cos \theta  - g \\
\dot{\theta} &= \omega \\
\dot{\omega} &= r(u_1 - u_2)/I
\end{aligned}
\right.
$$

#### **Description**
- Designed a **Sequential Quadratic Programming (SQP) solver** to allow a 2D quadrotor to perform flipping 3 times
- For the task demonstrated above, this SQP solver is able to converge with ***only 17 iterations***
- This nonlinear system dynamics is linearized and discretized into the form suitable for SQP
- A simple quadratic cost is used for SQP formulation
- QP Subproblem of SQP
  - Equality Contraints are based on the ***initial state*** and the linearized & discretized ***system dynamics***
  - Inequality Constraints are based on the ***limit on rotor thrust*** and the ***limit on quadrotor altitude***

