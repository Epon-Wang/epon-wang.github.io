---
layout: page
title: Reinforcement Learning for Quadrupedal Locomotion
description: Training robust walking policies for the Unitree Go2 robot using Proximal Policy Optimization (PPO)
img: assets/img/rob6323.png
importance: 3
category: 2025
---

***
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![IsaacLab](https://img.shields.io/badge/IsaacLab-76b900?style=for-the-badge&logo=nvidia&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![wandb](https://img.shields.io/badge/wandb-FFBE00?style=for-the-badge&logo=WeightsAndBiases&logoColor=white)

***

Link to [Github Repo](https://github.com/Epon-Wang/Go2Loco)

### **Demo**

<div style="text-align: center;">
    <img src="gait.gif" alt="walking" style="zoom: 60%;" />
</div>

### **Description**
- Developed a high-fidelity locomotion policy for the Unitree Go2 in Isaac Lab, leveraging Proximal Policy Optimization (PPO) to train robust gait controllers
- Implemented a custom actuator friction model incorporating static and viscous friction terms into the low-level PD control loop, significantly narrowing the sim-to-real gap by explicitly compensating for hardware non-linearities
- Integrated Raibert Heuristics gait shaping and dynamic foot clearance constraints into the reward formulation, ensuring stable trotting gaits capable of precisely tracking planar velocity commands under stochastic joint disturbances